import re
import sys
import os

def convert_tex_delimiters(md_content):
    pattern = re.compile(
        r'(?<!\$)'          # not preceded by another $
        r'\$(?!\$)'         # a single $
        r'([^\$]+?)'        # non-greedy match for anything except $
        r'(?<!\$)'          # not ending with a $
        r'\$(?!\$)'         # closing single $
    )

    def split_md(md):
        segments = []
        code_block = False
        inline_code = False
        cur = []
        i = 0
        while i < len(md):
            if md.startswith("```", i):
                if cur:
                    segments.append((inline_code or code_block, ''.join(cur)))
                    cur = []
                end = md.find('\n', i)
                if end == -1:
                    end = len(md)
                segments.append((True, md[i:end+1]))
                i = end + 1
                code_block = not code_block
                continue
            if md[i] == '`' and not code_block:
                tick_count = 1
                while i + tick_count < len(md) and md[i + tick_count] == '`':
                    tick_count += 1
                if cur:
                    segments.append((inline_code, ''.join(cur)))
                    cur = []
                end = md.find('`' * tick_count, i + tick_count)
                if end == -1:
                    end = len(md)
                else:
                    end += tick_count
                segments.append((True, md[i:end]))
                i = end
                continue
            cur.append(md[i])
            i += 1
        if cur:
            segments.append((inline_code or code_block, ''.join(cur)))
        return segments

    segments = split_md(md_content)
    result = []
    for is_code, text in segments:
        if is_code:
            result.append(text)
        else:
            text = pattern.sub(lambda m: f"$${m.group(1)}$$", text)
            result.append(text)
    return ''.join(result)

def resolve_input_path(infile):
    # Always read from posts_rawmd unless an absolute/relative path is provided
    if not os.path.dirname(infile) and infile.endswith('.md'):
        return os.path.join('posts_rawmd', infile)
    return infile

def resolve_output_path(infile):
    # Always write to _posts with same filename as input (strip any path)
    filename = os.path.basename(infile)
    return os.path.join('_posts', filename)

def main():
    if len(sys.argv) != 2:
        print("Usage: python convert_inline_tex_to_block.py input.md")
        print("Input is read from posts_rawmd/, output is written to _posts/")
        sys.exit(1)
    infile_arg = sys.argv[1]
    infile = resolve_input_path(infile_arg)
    outfile = resolve_output_path(infile_arg)
    with open(infile, 'r', encoding='utf-8') as f:
        md_content = f.read()
    converted = convert_tex_delimiters(md_content)
    with open(outfile, 'w', encoding='utf-8') as f:
        f.write(converted)

if __name__ == "__main__":
    main()