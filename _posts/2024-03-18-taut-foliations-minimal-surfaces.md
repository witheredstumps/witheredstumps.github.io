---
layout: post
title: 'Taut foliations and minimal surfaces'
date: 2024-03-18
type: post
tags:
- minimal-surfaces
- taut-foliations
- thurston-norm
permalink: "/2024/03/18/taut-foliations-minimal-surfaces/"
---


The goal of this post is to prove the following theorem of Hansklaus Rummler and Dennis Sullivan. The references I used are "Foliations and the Geometry of 3-Manifolds" by Danny Calegari and "Combinatorial volume preserving flows and taut foliations" by David Gabai.

<b>Theorem</b>. Let $$\mathcal{F}$$ be a co-orientable codimension one foliation of an oriented closed smooth $$n$$-manifold $$M$$. Then the following are equivalent:

1. $$\mathcal{F}$$ is taut,

2. There is a positive volume form on $$M$$ and a volume-preserving flow on $$M$$ transverse to $$\mathcal{F}$$,

3. There is a Riemannian metric on $$M$$ such that the leaves are locally area-minimizing.

*Proof*. Suppose $$\mathcal{F}$$ is taut. Then for any $$p \in M$$, we can find an embedded loop $$\phi : S^1 \to M$$ transverse to $$\mathcal{F}$$ passing through $$p$$. Take a slight thickening to $$\phi : S^1 \times D^{n-1} \to M$$. We arrange $$\phi$$ by a small homotopy so that $$\phi^{-1}(\mathcal{F})$$ is the natural product foliation on $$S^1 \times D^{n-1}$$ by $$\{pt\} \times D^{n-1}$$. Since $$M$$ is compact, we may cover it by finitely many such embedded tori $$\phi_i : S^1 \times D^{n-1} \to M$$. Let $$\theta_i$$ denote a $$(n-1)$$-form on $$S^1 \times D^{n-1}$$ which on the leaves $$\{pt\} \times D^{n-1}$$ restrict to a positive volume form on the interior of the disk and vanishes near the boundary $$\{pt\} \times \partial D^{n-1}$$. Define:

$$\displaystyle \theta_{\mathcal{F}} = \sum_i (\phi_i)_* \theta_i$$

By construction, $$\theta_{\mathcal{F}}$$ is a leafwise positive volume form on $$M$$. Let $$\alpha$$ be the $$1$$-form on $$M$$ such that $$\ker \alpha = T\mathcal{F}$$ is the distribution given by tangent spaces to the leaves of the foliation. Define $$\omega = \alpha \wedge \theta_{\mathcal{F}}$$. Let $$X$$ be the unique vector field such that $$\theta_{\mathcal{F}}(X) = 0$$ and $$\alpha(X) = 1$$. Then,

$$\mathcal{L}_X \omega = i_X d\omega + di_X \omega = d i_X \omega = d\theta_{\mathcal{F}} = 0$$

Therefore, $$X$$ is a volume-preserving flow transverse to $$\mathcal{F}$$. This proves (1) implies (2).

Suppose we have a positive volume form $$\omega$$ on $$M$$ and a volume-preserving flow $$X$$ transverse to $$\mathcal{F}$$. Let $$\theta = i_X \omega$$, which must be a positive volume form on the leaves of $$\mathcal{F}$$. Let $$K = \ker(\theta)$$, so that we have $$TM = T\mathcal{F} \oplus K$$. Define a Riemannian metric on $$M$$ by $$g = g_l \oplus g_k$$ where $$g_l$$ is a metric on the distribution $$T\mathcal{F}$$ so that $$\theta$$ is the Riemannian volume form on the leaves of $$\mathcal{F}$$ with respect to $$g_l$$, and $$g_k$$ is a positive definite metric on $$K$$. 

The important property that $$\theta$$ has is as follows. Clearly, for any orthonormal $$(n-1)$$-frame in $$T \mathcal{F}$$, $$\theta$$ evaluates to $$1$$ on it. For an orthonormal $$(n-1)$$-frame in $$TM$$, $$\theta$$ completely ignores the components of all the vectors in the direction of $$K$$. Therefore, it evaluates to at most $$1$$ on such a frame, with equality only if the frame is tangential to the leaves of $$\mathcal{F}$$. One says $$\theta$$ is a calibration for the leaves of $$\mathcal{F}$$. Let $$L$$ be a leaf of $$\mathcal{F}$$. For any compact codimension zero submanifold-with-boundary $$(\Omega, \partial \Omega) \subset L$$ and a perturbed copy of it $$\Omega' \subset M$$ with $$\partial \Omega = \partial \Omega'$$ representing $$[\Omega] \subset H_2(M, \partial \Omega; \Bbb R)$$, we must have the following:

$$\displaystyle \mathrm{vol}_g(\Omega) = \int_{\Omega} \theta = \int_{\Omega'} \theta \leq \int_{\Omega'} \mathrm{vol}_g = \mathrm{vol}_g(\Omega')$$

where the inequality above is true by the calibration property. Consequently, the leaves of $$L$$ are locally area-minimizing with respect to the metric $$g$$, i.e., they are minimal hypersurfaces. This proves (2) implies (3).

It remains to prove (3) implies (1). Given a Riemannian metric $$g$$ such that each leaf of $$\mathcal{F}$$ is locally area-minimizing, we may consider an $$(n-1)$$-form $$\theta$$ which restricts to the Riemannian volume form on each leaf. This is a calibration for all the leaves of $$\mathcal{F}$$, as above. Suppose $$\mathcal{F}$$ is not taut. Fix a transverse co-orientation of $$\mathcal{F}$$. Let $$L \subset M$$ be a leaf of $$\mathcal{F}$$. Define the accessible set $$A(L)$$ to be the set of points $$x \in M$$ such that there is a positively directed arc transverse to $$\mathcal{F}$$ from $$L$$ to $$x$$. Clearly, $$A(L)$$ is open and  saturated by leaves of $$\mathcal{F}$$, therefore the boundary $$\partial A(L)$$ is also a (possibly empty) union of leaves. However, if $$A(L) = M$$, then every leaf admits a positive transversal arc from $$L$$ from both negative and positive sides, which we can combine to produce a transverse circle through every leaf, contradicting our hypothesis that $$\mathcal{F}$$ is not taut. Thus, $$\partial A(L) \neq \emptyset$$. Let $$L' \subset \partial A(L)$$ be a leaf. We claim $$A(L)$$ cannot accumulate to $$L'$$ from the negative side. If it did, there would be a sequence $$x_n \in A(L)$$ converging to $$x \in L$$ from the negative side, hence there would be a positively directed arc from some $$x_n$$ to $$L'$$. But $$x_n \in A(L)$$, so there is a positively directed arc from $$L$$ to $$x_n$$. Combining, we obtain a positively directed arc joining $$L$$ and $$L'$$, forcing $$L' \subset A(L)$$, contradiction. Thus, $$\overline{A(L)}$$ is a compact manifold with boundary a collection of compact leaves $$L_1, \cdots, L_n$$ such that $$A(L)$$ lies on the negative side of all of them. Therefore, the oriented disjoint union $$L_1 \sqcup \cdots \sqcup L_n$$ is null-cobordant, hence $$\chi(L_1) + \cdots + \chi(L_n) = 0$$. However, we then have

$$\displaystyle 0 = \int_{L_1 \sqcup \cdots \sqcup L_n} \theta = \int_{L_1} \theta + \cdots + \int_{L_n} \theta = \mathrm{vol}(L_1) + \cdots + \mathrm{vol}(L_n),$$

contradiction. This concludes the proof of the theorem.

As an interesting application, we have the following theorem of Novikov and Rosenberg. I have attached a link to a proof I had written a while ago, which is lacking in detail but I feel gets the main ideas across. The main technical tool involves the theorem of Rummler and Sullivan above, together with a compactness theorem for minimal surfaces due to Choi-Schoen.

<b>Theorem</b>. Let $$M^3$$ be a closed oriented three-manifold. Let $$\mathcal{F}$$ be a taut foliation of $$M^3$$. Then the leaves of $$\mathcal{F}$$ are $$\pi_1$$-injective subsurfaces of $$M$$. Moreover, any closed transversal to $$\mathcal{F}$$ is nontrivial in $$\pi_1$$.

*Proof*. See [here](/assets/docs/taut_leaf_incomp.pdf). The argument for closed transversals is completely analogous: we assume it is nullhomologous, therefore bounds a disk in the three-manifold by Dehn's lemma. But then the same argument shows the disk can be homotoped rel boundary to lie entirely on a leaf, which is a contradiction.

We end this topic by discussing a combinatorial version of the Sullivan-Rummler theorem. First, we introduce some terminology. A normal arc in a 2-simplex is a properly embedded arc intersecting a pair of distinct edges. A normal disk in a 3-simplex is a properly embedded disk whose boundary consists of either 3 or 4 properly embedded arcs in the respective 2-faces they are contained in. 

<b>Definition</b>. Let $$M$$ be a three-manifold with a triangulation $$\tau$$. A normal surface is a surface $$S \subset M$$ such that $$S$$ intersects each three-simplex in $$M$$ in a normal disk. A foliation $$\mathcal{F}$$ on $$M$$ is said to be in normal form $$\mathcal{F}$$ is transverse to the 1- and 2-simplices, distinct vertices lie in distinct leaves, and for each leaf $$L$$ and a three-simplex $$\Delta \subset \tau$$, each non-point component of $$L \cap \Delta$$ is a normal disk.

<b>Proposition</b>. Let $$M$$ be a three-manifold, and $$\mathcal{F}$$ be a codimension one foliation. There exists a smooth triangulation $$\tau$$ of $$M$$ with respect to which $$\mathcal{F}$$ is in normal form.

*Proof*. Find a smooth triangulation, and then subdivide until all the three-simplices get inside foliated charts. Applying transversality, we may assume for every three-simplex $$\Delta \subset \tau$$, $$\mathcal{F}$$ is transverse to the 1- and 2-faces of $$\Delta$$ except at some isolated points of Morse tangencies. The picture for $$\mathcal{F}\vert\Delta$$ in the coordinates given by the foliated chart is that of a curvilinear simplex sitting inside $$\Bbb R^3$$, getting scanned by affine linear hyperplanes $$z = \mathrm{const.}$$, and the 1- and 2-faces are Morse with respect to the $$z$$-height. It's obvious how to subdivide the simplex further to achieve normal form: add faces parallel to the level set of the $$z$$-heights at all critical values, and then tilt the new faces a little to make it transverse to the level sets except at the vertices.

<b>Definition</b>. A combinatorial volume preserving flow $$(\phi, \tau)$$ on a three-manifold $$M$$ consists of a triangulation $$\tau$$ and an assignment of positive integral weights $$\phi(e)$$ as well as orientation to each edge $$e \subset \tau^{(1)}$$, such that at each vertex, the conservation of mass property is satisfied: sum of incoming weights is equal to sum of outgoing weights.

A codimension one co-oriented foliation in normal positive with a triangulation induces a natural orientation on each of the 1-skeleton: for any three-simplex, the co-orientation induces a linear ordering on the vertices of the simplex where $$v < w$$ if there is an edge from $$v$$ to $$w$$ pointing in the same direction as the co-orienting vector for the leaves transverse to that edge. 

<b>Proposition</b>. (Gabai) Let $$\mathcal{F}$$ be a co-oriented codimension-one foliation on a closed oriented three-manifold $$M$$. $$\mathcal{F}$$ is taut if and only if there is a combinatorial volume preserving flow $$(\phi, \tau)$$ compatible with $$\mathcal{F}$$.

*Proof*. Suppose $$\mathcal{F}$$ is taut, and $$\tau$$ be a smooth triangulation with respect to which it is in normal form. The tautness of $$\mathcal{F}$$ guarantees that the induced directed graph structure on $$\tau^{(1)}$$ gives a recurrent graph, i.e., any vertex can be joined with any vertex by a piecewise linear directed arc. This is because we may take a smooth positively oriented arc in $$M$$ joining them so that it is transverse to the foliation, by tautness, after which we can simplicially approximate the arc. Thus, for every edge $$e \subset \tau^{(1)}$$, there is a piecewise linear directed loop $$\gamma_e \subset \tau^{(1)}$$ containing $$e$$. Let $$\mathcal{C} := \{\gamma_e\}$$ denote a finite collection of such loops, one for each edge $$e \subset \tau^{(1)}$$. We define $$\phi(e)$$ to be the number of times $$\mathcal{C}$$ crosses $$e$$ counted with multiplicity. Then $$\phi$$ clearly satisfies conservation of mass, therefore $$(\phi, \tau)$$ is a combinatorial volume preserving flow. The converse is easy.

<b>Definition</b>. For a combinatorial volume preserving flow $$(\phi, \tau)$$ on $$M$$ and a normal surface $$S \subset M$$, we define the weight of $$S$$ (to be thought as "combinatorial area") as 

$$\displaystyle w(S) = \sum_e \phi(e) |e \cap S|$$

where $\vert e \cap S \vert $ denotes the cardinality of the set of intersections of $S$ with $e$. 

Let $\mathcal{F}$ be a taut foliation with a combinatorial volume preserving flow $(\phi, \tau)$. For any leaf $L \subset \mathcal{F}$, let $S \subset L$ be a compact normal subsurface. Let $R \subset M$ be another normal surface with $\partial S = \partial R$ representing $[S] \in H_2(M, \partial S; \Bbb Z)$. Then,

$$\displaystyle \begin{aligned} w(R) = \sum_e \phi(e) |e \cap R| \geq \sum_e \phi(e) \langle e, R \rangle& = \sum_e \phi(e) \langle e, S \rangle \\ &= \sum_e \phi(e) |e \cap S| \\ &= w(S)\end{aligned}$$

where $\langle e, R \rangle$ denotes the algebraic intersection number i.e., the signed intersection count. The first inequality is true as clearly the unsigned count is more than the signed count, the subsequent equality is true as $R, S$ represent the same relative homology class and the final equality is true as $S$ intersects all the edges $e$ positively by definition of the orientation of $\tau^{(1)}$ induced from the co-orientation of the leaves. 

Therefore, the leaves of a taut foliation in normal form are combinatorial area minimizing.