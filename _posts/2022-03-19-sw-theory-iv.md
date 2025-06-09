---
layout: post
title: 'Seiberg-Witten Theory: IV'
date: 2022-03-19
type: post
tags:
- gauge-theory
- index-theory
- spin-geometry
permalink: "/2022/03/19/sw-theory-iv/"
---


Let $$M$$ be a closed oriented smooth $$4$$-manifold with a choice of a Riemannian metric $$g$$, and a spinC-structure $$\mathfrak{s}$$. The spinC-structure gives rise to a Clifford representation of the complexified tangent bundle $$\rho : T^{\Bbb C} M \to \mathrm{End}(S)$$ on the complex spinor bundle $$S$$ which is of rank $$4 = 2^{4/2}$$, admitting a chiral decomposition $$S = S^- \oplus S^+$$ and associated determinant line bundle $$L = \Lambda^2 S^+ \cong \Lambda^2 S^-$$ whose 1st Chern class is the integral lift of the 2nd Stiefel-Whitney class of $$M$$ coming from $$\mathfrak{s}$$, as discussed in Part III. We choose a connection $$A$$ on $$L$$ which, combined with the LC connection on $$(M, g)$$, determines a spin connection on $$S$$. Then there is an associated Dirac operator $$\slash \!\!\! \partial_A : \Gamma^{\pm}(S) \to \Gamma^{\mp}(S)$$. 

Moreover, we have the Hodge star operator $$\star : \Omega^2(M) \to \Omega^2(M)$$ and we shall call the eigenspaces of $$\star$$ of eigenvalues $$\pm 1$$ as the self-dual and anti-self-dual $$2$$-forms, giving a decomposition $$\Omega^2 = \Omega^{2,+} \oplus \Omega^{2, -}$$; we shall write $$\omega^+$$ to mean the self-dual part of a $$2$$-form $$\omega$$. The SD-ASD decomposition mirrors the chiral decomposition $$S = S^+ \oplus S^-$$. More precisely, the connection between these is explained by the spin representation $$\rho : T^{\Bbb C} M \to \mathrm{End}(S) = S \otimes S$$ which may be baked to a representation

$$\displaystyle \rho : \Omega^2(M) \otimes \Bbb C = \Lambda^2 T^*M \otimes \Bbb C \to S \otimes S$$

by replacing wedge with Clifford multiplication wherever it appears. We obtain the decomposition $$S^+ \otimes S^- \cong \Omega^0 \oplus \Omega^{2,+}$$, a mnemonic for which is that a left-handed and a right-handed spin-1/2 fermion can combine to give a spin 0 (which has a single state, so rank of $$\Omega^0$$ is $$1$$) or a spin 1 (which has three states -1, 0, 1, so rank of $$\Omega^{2,+}$$ is $$3$$) fermion; note that the projection to the first factor is simply taking trace. Whenever $$\psi$$ is a positive chirality spinor (a section of $$S^+$$), we will write $$(\psi \otimes \psi^\dagger)_0$$ to mean the trace-0 part of the tensor, conceptualized as a self-dual 2-form.

Given all of this, we shall now write down the Seiberg-Witten equations. For a pair $$(A, \psi) \in \mathcal{A}(L) \oplus \Gamma(S^+)$$, these are given by

$$\displaystyle \slash \!\!\! \partial_A \psi = 0 \\ F_A^+ = (\psi \otimes \psi^\dagger)_0$$

The second equation is the quadratic part; observe both sides are $$i \Bbb R$$-valued self-dual $$2$$-forms on $$M$$. We may perturb the SW equations by adding $$i \mu$$ to the right hand side of the second equation, for a fixed self-dual $$2$$-form $$\mu$$, which I expect is useful for transversality arguments later. 

The natural gauge symmetries of these equations is recorded by the group $$\mathcal{G} = C^\infty(M, S^1)$$. For $$g \in \mathcal{G}$$, it acts on the complex vector bundle $$S^+$$ by pointwise multiplication; thus the induced action on sections is $$\psi \mapsto g \psi$$ and the induced action on the line bundle $$L$$ is by $$g^2$$ (see Part III); this implies the action by conjugation on the covariant derivative $$\nabla^A_L$$ corresponding to the connection $$A$$ is given as follows:

$$\displaystyle g^{-2} \nabla^A_L g^{2} = g^{-2} d g^{2} + g^{-2} A g^2 = -2g^{-1} dg + A$$

Therefore, the induced action on connections is given by $$A \mapsto -2g^{-1} dg + A$$. It is straightforward to check that SW-equations are invariant under the action of $$\mathcal{G}$$; indeed $$\slash \!\!\! \partial_{g\cdot A} (g \cdot \psi) = \gamma^\mu ( g^{-1} \nabla^A_i g )g \psi = g^{-1} \gamma^\mu \nabla^A_i \psi$$ and $$F_{g\cdot A}^+ = F_A^+$$ as deforming the connection by a locally exact form $$-2g^{-1} dg = -2d\log(g)$$ leaves the curvature invariant. The moduli space of solutions of the SW-equations, defined by the space of solutions modded out by the action of $$\mathcal{G}$$ will be denoted as $$\mathcal{M}_{\mathfrak{s}, g, \mu}$$.

The main result which will be discussed in the course of time is that $$\mathcal{M}_{\mathfrak{s}, g, \mu}$$ is a compact, smooth, oriented manifold of dimension $$-(2\chi(M) + 3\sigma(M))/4 + c_1(L)^2$$ for a generic perturbation $$\mu$$ when $$b_2^+ > 1$$. In the zero dimensional case, counting the signed connected components gives us the so-called Seiberg-Witten invariants of $$M$$.