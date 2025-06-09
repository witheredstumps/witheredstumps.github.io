---
layout: post
title: 'Thurston norm: Part II'
date: 2024-03-12
type: post
tags:
- hyperbolic-geometry
- taut-foliations
- contact-topology
permalink: "/2024/03/12/thurston-norm-ii/"
---

Theorem. (Thurston) Suppose $$(M, \partial M)$$ is a compact oriented $$3$$-manifold-with-boundary, and every embedded surface representing a nonzero homology class has negative Euler characteristic. Then the Thurston norm-ball of $$(M, \partial M)$$ is a finite-sided convex polyhedron.

The hypothesis of the theorem implies the Thurston norm is in fact a norm, as opposed to a semi-norm. Note that this is satisfied, for instance, if $$M$$ is a hyperbolic $$3$$-manifold with boundary. The theorem will follow from the following lemma about normed spaces, with $$V = H_2(M, \partial M; \Bbb R)$$ as the vector space and $$\Lambda$$ as the integral lattice given by image of the change of coefficients homomorphism from the integral cohomology.

Lemma. Let $$V$$ is a finite-dimensional real vector space and $$\Lambda \subset V$$ is an integer lattice. Let $$\|\cdot\|$$ be a norm on $$V$$ and suppose $$\|\cdot\|$$ takes integer values on $$\Lambda$$. Then the unit ball in $$(V, \|\cdot\|)$$ is a finite-sided convex polyhedron.

Proof.  For ease of discussion, suppose $$V = \Bbb R^3$$ and $$\Lambda = \Bbb Z^3$$. Whenever $$\alpha, \beta, \gamma$$ are an integral basis of $$\Bbb R^3$$, there is a unique linear functional $$L_{\alpha, \beta, \gamma}$$ on $$\Bbb R^3$$ with integer coefficients such that its values at $$\alpha, \beta, \gamma$$ are $$\|\alpha\|, \|\beta\|, \|\gamma\|$$, respectively. Let $$\mathbf{e}_i, 1 \leq i \leq 3$$ denote the standard integral basis of $$\Bbb Z^3$$. Let us denote $$L_n := L_{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3 + n \mathbf{e}_1}$$. We observe:

$$\displaystyle L_n(\mathbf{e}_3) = L_n(\mathbf{e}_3 + n \mathbf{e}_1) - n L_n(\mathbf{e}_1) = \|\mathbf{e}_3 + n \mathbf{e}_1\| - n \|\mathbf{e}_1\|,$$

which is non-increasing in $$n$$, by the triangle inequality. But as this value is integral, we conclude $$L_n(\mathbf{e}_3)$$ must be eventually constant. Therefore, for some sufficiently large $$n$$, $$L_n(\mathbf{e}_3) = L_{n+1}(\mathbf{e}_3)$$, which translates to:

$$\|\mathbf{e}_3 + n \mathbf{e}_1\| + \|\mathbf{e}_1\| = \|(\mathbf{e}_3 + n \mathbf{e}_1) + \mathbf{e}_1\|$$

Now, it is a property of any norm $$|\cdot|$$ on a vector space $$V$$ that if $$x, y \in V$$ are two points such that one has $$|x + y| = |x| + |y|$$, then $$|\cdot|$$ is a linear function on the entire Euclidean line segment connecting $$x, y$$. This can be checked by the following tricky triangle inequality argument: suppose $$t \in [0, 1]$$, then

$$\displaystyle \begin{aligned}|x + y| = |x + ty + (1 - t)y| \leq |x + ty| + (1-t)|y| &\leq |x| + t|y| +(1-t)|y| \\ &= |x| + |y|\end{aligned}$$

By hypothesis the first and last terms in the above chain of inequalities are equal, which means all the intermediate inequalities must be equality. Therefore, $$|x + ty| = |x| + t|y|$$, as desired. As a corollary of this, we obtain $$\|\cdot\|$$ is linear along the Euclidean segment connecting $$\mathbf{e}_3 + n \mathbf{e}_1$$ and $$\mathbf{e}_1$$. Therefore, $$\|\cdot\|$$ agrees with $$L_n$$ along this segment. Now, consider the linear function $$L_{m, n} := L_{\mathbf{e}_1, \mathbf{e}_2 + m \mathbf{e}_1, \mathbf{e}_3 + n \mathbf{e}_1}$$. Notice $$L_{m, n}$$ agrees with $$L_n$$ on $$\mathbf{e}_3$$, and by an analogous argument as earlier, $$L_{m, n}(\mathbf{e}_2)$$ is eventually constant for large enough values of $$m$$. Therefore, for some sufficiently large $$m$$, $$L_{m, n}(\mathbf{e}_2) = L_{m+1,n}(\mathbf{e}_2)$$ and so $$\|\cdot\|$$ agrees with $$L_{m, n}$$ on the Euclidean segment connecting $$\mathbf{e}_2 + m \mathbf{e}_1$$ and $$\mathbf{e}_1$$. Finally, consider 

$$\displaystyle L_{m, n, p} = L_{\mathbf{e}_1, \mathbf{e}_2 + m \mathbf{e}_1 + p(\mathbf{e}_3 + n \mathbf{e_1}) + p \mathbf{e}_1, \mathbf{e}_3 + n \mathbf{e}_1}$$

Let us write $$\alpha = \mathbf{e}_1$$, $$\beta = \mathbf{e}_2 + m\mathbf{e}_1$$ and $$\gamma = \mathbf{e}_3 + n\mathbf{e}_1$$ for brevity. Mutatis mutandis, we conclude that $$L_{m, n, p}$$ agrees with $$L_{m, n, p+1}$$ for large enough values of $$p$$. Consequently, for a sufficiently large value of $$p$$, we must have $$\displaystyle L_{m, n, p}(\beta) = L_{m, n, p+1}(\beta)$$. Simplifying, we get

$$\|\beta+ p \gamma + p \alpha\| + \|\gamma + \alpha\| = \|\beta + (p+1)\gamma + (p+1)\alpha\|$$

But observe $$\|\gamma + \alpha\| = \|\mathbf{e}_3 + (n+1)\mathbf{e}_1\| = \|\gamma\| + \|\alpha\|$$. Using this, we deduce,

$$\|\beta+ p \gamma + p \alpha\| + \|\gamma\| + \|\alpha\| = \|(\beta + p\gamma + p\alpha) + \gamma + \alpha\|$$

For any triple of vectors $$x, y, z$$ in a normed vector space $$(V, |\cdot|)$$, if $$|x +y+z| = |x|+|y|+|z|$$ holds, then $$|\cdot|$$ is in fact linear on the entire simplex spanned by $$x, y, z$$. This follows from an analogous argument as in the segment case: for all $$t, s \in [0, 1]$$, 

$$\displaystyle \begin{aligned}|x + y + z| &= |x + ty + sz + (1 - t)y + (1-s)z|  \\ &\leq |x + ty + sz| + (1-t)|y| + (1-s)|z| \\&= |x| + |y| + |z|\end{aligned}$$

By hypothesis, all the inequalities above are equalities. Applying this with $$x = \beta+p\gamma+p\alpha, y = \gamma, z = \alpha$$, we see $$L_{m, n, p}$$ agrees with $$\|\cdot\|$$ on the entire simplex spanned by these vectors. Therefore, the hyperplane $$\{L_{m, n, p} = 1\}$$ defines a facet of the unit norm ball, by convexity of the ball. Notice that $$L_{m, n, p}$$ is an integral linear functional, and norm of $$L_{m, n, p}$$ with respect to $$\|\cdot\|$$ is $$1$$ as it is tangential to the unit norm ball, and the rest of the ball lies on the half-space $$L_{m, n, p} \leq 1$$. Varying $$\mathbf{e}_i$$, $$1 \leq i \leq 3$$ over all integral bases of $$\Bbb Z^3$$ by an action of $$\mathrm{SL}_3(\Bbb Z)$$, we see that that the vectors $$\beta + p\gamma+p\alpha$$, $$\gamma$$ and $$\alpha$$ can define all projectively rational simplices in $$\Bbb{RP}^2$$. Therefore, the unit norm ball of $$\|\cdot\|$$ is intersection of half-spaces defined by integral linear functionals of norm $$1$$. Since the dual norm ball is compact, we conclude the norm ball must be a finite intersection of half-space defined by integral linear functionals. This concludes the proof. 

As a consequence, we give a solution to the exercise at the end of the previous post. Let $$L \subset S^3$$ be the Whitehead link, and $$\alpha, \beta$$ be the generators of $$H_2(S^3 \setminus \nu(L), \partial \nu(L); \Bbb Z)$$ as before. We wish to find a norm-minimizing representative of $$5 \alpha + 3 \beta$$. Recall we proved,

$$\|\alpha\| = \|\beta\| = \|(\alpha + \beta)/2\| = 1,$$

where $$\alpha + \beta$$ has norm $$2$$ because this is the homology class of the Seifert surface of the Whitehead link, which is genus $$1$$ and therefore Euler characteristic $$2 - 2 \cdot 1 - 2 = -2$$ (as there are two components). By the Theorem above, we conclude that the entire segment connecting $$\alpha, \beta$$ in the real homology vector space must be contained in the unit sphere of the Thurston norm. Hence, the convex combination $$5/8 \cdot \alpha + 3/8 \cdot \beta$$ must have norm $$1$$. Thus, $$\|5 \alpha + 3 \beta\| = 8$$.

To find a minimizing representative, we simply consider $$5$$ parallel copies of the surface $$\alpha$$, and $$3$$ parallel copies of the surface $$\beta$$. A pair of surfaces chosen from each intersect in a properly embedded arc (connecting a pair of points in the two components of $$L$$). We take the oriented sum of the surfaces, by cutting both along the arc and pasting criss-cross so that orientations are preserved. Doing this for all arcs in the intersection resolves the singularities. This is the desired norm-minimizer, as can be checked by computing the Euler characteristic.