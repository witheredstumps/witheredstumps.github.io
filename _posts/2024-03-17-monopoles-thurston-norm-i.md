---
layout: post
title: 'Monopoles and Thurston norm: Part I'
date: 2024-03-17
type: post
tags:
- monopoles
- scalar-curvature
- taut-foliations
- thurston-norm
permalink: "/2021/12/07/monopoles-thurston-norm-i/"
---


A couple years ago I started writing a series of posts on Seiberg-Witten invariants which I never ended up finishing (which can be found here). To tie up with what I am learning now, I'll write some notes on the 1997 paper ``Scalar curvature and the Thurston norm" by Kronheimer and Mrowka, which exhibits an interesting connection between Seiberg-Witten theory and the Thurston norm.

 Let us begin by recalling basic terminology. Let $M$ be an oriented closed three-manifold, equipped with a Riemannian metric $g$. A spinc (stylized  spinC ) structure on $M$ is a unitary rank $2$ vector bundle $S \to M$ together with a ``Clifford multiplication" $$\rho : TM \to \mathrm{End}(S)$$ satisfying the following property: given any oriented orthonormal frame $$\{e_1, e_2, e_3\}$$ at a point $$p \in M$$, the following properties are true for all $$i, j$$:

$$\displaystyle \begin{aligned}\rho(e_i)\rho(e_j) + \rho(e_j)\rho(e_i) &= 2\delta_{ij}I \\ \rho(e_i)^\star &= -\rho(e_i) \\ \rho(e_1)\rho(e_2)\rho(e_k) &= I\end{aligned}$$ 

It can be checked that these conditions are independent of the choice of the oriented orthonormal frame. Therefore, $$\rho$$ is an orientation-preserving isometric isomorphism from $$TM$$ onto the subbundle of $$\mathrm{End}(S)$$ denoted as $$\mathfrak{su}(S)$$, consisting of traceless anti-hermitian endomorphisms, equipped with the inner product $$\mathrm{tr}(a^\star b)/2$$. Any three-manifold admits a spinc structure: it is a standard fact that the tangent bundle of a three-manifold is trivial, so we define $$S = M \times \Bbb C^2$$ and let $$\rho(e_i) = \sigma_i$$ be the Pauli matrices, where $$\{e_1, e_2, e_3\}$$ is a global orthonormal frame on $$M$$. The set of spinc structures is naturally an affine space over $$H^2(M; \Bbb Z)$$ for the following reason: given any class $$\alpha$$ in the second cohomology group, it corresponds naturally to a complex line bundle $$L$$ over $$M$$ so that $$c_1(L) = \alpha$$. For any spinc structure $$\mathfrak{s} = (S, \rho)$$, we may form a new spinc structure $$(S \otimes L, \rho \otimes 1_L)$$, denoted $$\mathfrak{s} + \alpha$$. In fact, it is not too difficult to see that any two spinc structures differ by an element of the second integral cohomology group.

Given a spinc structure $$(S, \rho)$$, a spinc connection is a metric connection $$B$$ on $$S$$ such that $$\rho$$ is $$B$$-parallel, i.e., $$\nabla^B \rho = 0$$. In other words, for all vector fields $$X, Y$$ and section $$\psi$$ of $$S$$,

$$\nabla^B_X (\rho(Y)\psi) = \rho(\nabla_X Y)\psi + \rho(Y) \nabla^B_X \psi,$$

where $$\nabla_X Y$$ is the Levi-Civita connection on $$M$$. In the example $$S = M \times \Bbb C^2$$ described above, we can explicitly solve for a spin connection as follows: write $$\nabla^B_X \psi = d \psi(X) + B(X) \psi$$ where $$d\psi(X)$$ is the directional derivative of the section $$\psi$$ of $$S$$ treated as a function to $$\Bbb C^2$$, and $$B$$ is a $$\mathfrak{u}(2)$$-valued $$1$$-form on $$M$$. Then the parallelity condition above gives $$[B(X), \rho(Y)] = \rho(\nabla_X Y)$$. We may plug in $$X, Y$$ from the oriented orthonormal basis $$\{e_1, e_2, e_3\}$$ to write the trace-free part of $$B(e_i)$$ completely in terms of the Pauli matrices and the Christoffel symbols. (Someone please do this computation and tell me the answer; I'll make infinite sign errors if I try). The space of spinc connections on $$(S, \rho)$$ is likewise an affine space over $$\Omega^1(M; i\Bbb R)$$. Indeed, for any spinc connection $$B$$ and an imaginary-valued 1-form $$b$$, we may form a new spinc connection $$B + b \otimes 1_S$$, and any two spinc connections differ by such a 1-form. Let us call the sections of $$S$$ as spinors. 

Since $$S$$ is a unitary bundle of rank $$2$$, its second exterior power $$L = \Lambda^2 S$$ is a line bundle with a $$\mathfrak{u}(1) (= i\mathbb{R})$$-connection induced from $$B$$, which we will call $$B^t$$. Indeed, $$B^t$$ is the trace of the $$\mathfrak{u}(2)$$-valued form $$B$$ (since the derivative of determinant is trace). Since we saw in the previous paragraph that the trace-free part of $$B^t$$ is completely determined by the Levi-Civita connection on $$M$$, we conclude: a spinc connection $$B$$ on a fixed Riemannian manifold is entirely determined by a $$i\mathbb{R}$$-valued $$1$$-form $$B^t$$. We shall denote $$F_{B^t} = dB^t$$ to be the curvature of this connection on the determinant line bundle. Note that the corresponding cohomology class 

$$\displaystyle \left [\frac{i}{2\pi} \cdot F_{B^t} \right ] \in H^2(M; \Bbb R)$$ 

is precisely the 1st Chern class of $$\Lambda^2 S$$. We call it the Chern class of the spinc structure, and denote it by $$c_1(\mathfrak{s})$$.

Given a spinc connection, we may form the Dirac operator on spinors, which is a linear first order partial differential operator, as follows (the definition is basis-independent):

$$\displaystyle D_B : \Gamma(S) \to \Gamma(S),\; D_B\psi = \sum_{i = 1}^3 \rho(e_i)\nabla^B_{e_i} \psi$$

As a final observation, note that the Clifford multiplication $$\rho$$ can be extended to be defined on cotangent vectors by setting $$\rho(e^i) = \rho(e_i)$$ where $$e^i$$ is the dual covector to $$e_i$$. We can extend it to all forms by the rule 

$$\displaystyle \rho(\alpha \wedge \beta) = \frac12 \left ( \rho(\alpha)\rho(\beta)+ (-1)^{|\alpha||\beta|} \rho(\beta)\rho(\alpha) \right )$$

We may also define it for differential forms valued in complex coefficients, by letting $$\rho$$ simply commute with complex multiplication. Now that that's all done, let us recall the Seiberg-Witten equations on 3-manifolds. 

Let $$M$$ be a three manifold with a spinc structure $$\mathfrak{s} = (S, \rho)$$. The Seiberg-Witten equations or monopole equations for a pair $$(B, \psi)$$ consisting of a spinc connection and a spinor are:

$$\displaystyle \begin{aligned}\frac{1}{2} \cdot \rho(F_{B^t}) &= \left (\psi \otimes \psi^\star\right)_0 \\ D_B \psi &= 0 \end{aligned}$$

Here, $$\psi \otimes \psi^* \in S \otimes S^* = \mathrm{End}(S)$$ is a linear transformation, and $$(-)_0$$ denotes the traceless part of it. One says a solution $$(B, \psi)$$ is gauge-equivalent to another solution $$(B', \psi')$$ if there is a function $$u : M \to S^1$$ such that $$B' = B - u^{-1} du \otimes 1_S$$ and $$\psi' = u \psi$$. One tries to solve the monopole equations upto gauge equivalence. Observe that for any solution $$(B, \psi)$$, the cohomology class of $$F_{B^t}$$ is unchanged under gauge equivalence. We call a solution reducible if $$\psi = 0$$, which forces $$B^t$$ to be flat by the first equation.

Notice that the equations above depend on the choice of a metric $$g$$ on the Riemannian manifold $$M$$. In our definition, we built the spin structure $$\mathfrak{s} = (S, \rho)$$ itself using the metric. But it is not difficult to check that any two such choices of metrics $$g_0, g_1$$ gives rise to isomorphic spin structures $$\mathfrak{s}_0, \mathfrak{s}_1$$. This is because the space of metrics is a cone in the space of quadratic differentials, hence contractible. Thus, we can join $$g_0, g_1$$ by a 1-parameter family of metrics $$g_t$$. This gives rise to a 1-parameter family of spin structures $$\mathfrak{s}_t$$ interpolating $$\mathfrak{s}_0, \mathfrak{s}_1$$. Therefore, the spinc structure depends only upto contractible choice on the space of Riemannian metrics. Consequently, the Chern class $$c_1(\mathfrak{s})$$ is certainly independent of the underlying metric. However, the Seiberg-Witten equations themselves depend on the metric, since the Dirac operator and the Clifford multiplication both depend on the metric.

Definition. A cohomology class $$\alpha \in H^2(M; \Bbb R)$$ is a monopole class if there is a spinc structure $$\mathfrak{s} = (S, \rho)$$ such that $$c_1(\mathfrak{s}) = \alpha$$, and the corresponding Seiberg-Witten equations have an irreducible solution for all choices of Riemannian metrics.

Observe that if $$c_1(\mathfrak{s}) \neq 0$$, then if a solution to the Seiberg-Witten equations exist, they are necessarily irreducible. Otherwise, $$(B, 0)$$ is a solution, hence $$F_{B^t} = 0$$, contradiction.

Suppose $$(B, \psi)$$ is an irreducible solution for the Seiberg-Witten equations with respect to some Riemannian metric $$g$$ on $$M$$. The linear part of the Seiberg-Witten equation tells us $$D_B \psi = 0$$ (i.e., $$\psi$$ is a harmonic spinor). We use the Weitzenbock-Lichnerowicz formula to deduce:

$$\displaystyle 0 = D_B^\star D_B \psi = (\nabla^B)^\star \nabla^B \psi + \frac12 \rho(F_{B^t}) \psi + \frac14 s \psi,$$

where $$s$$ denotes the scalar curvature of $$(M, g)$$. The nonlinear part of the Seiberg-Witten equations imply the second term in the above is $$(\psi \otimes \psi^*)_0 \psi$$. We take inner product (wrt $$g$$) of the entire expression with $$\psi$$. Let us compute $$\langle (\psi \otimes \psi^*)_0 \psi, \psi \rangle$$. It is good to think of $$\psi$$ as simply a column vector, and $$\psi \otimes \psi^*$$ as simply the $$2 \times 2$$ matrix $$\psi \psi^*$$ where $$\psi^*$$ is the conjugate-transposed row vector. Then:

$$\displaystyle  \begin{aligned} \langle (\psi \otimes \psi^*)_0 \psi, \psi \rangle &= \langle (\psi \psi^* - \mathrm{tr}(\psi \psi^*)/2)\psi,  \psi \rangle \\ &= \langle \psi \psi^* \psi,\psi \rangle - \frac12 \mathrm{tr}(\psi \psi^*) \langle \psi, \psi \rangle \\ &= \|\psi\|^4 - \frac12 \|\psi\|^4 \\ &= \frac12 \|\psi\|^4 \end{aligned}$$

Therefore, by using the definition of adjoint, we get:

$$\displaystyle 0 = \|\nabla^B \psi\|^2 + \frac12 \|\psi\|^4 + \frac14 s \|\psi\|^2$$

Corollary. There are no irreducible solutions to the Seiberg-Witten equations for a metric $$g$$ on a three-manifold of non-negative scalar curvature $$s \geq 0$$. In particular, manifolds which admit a metric of non-negative scalar curvature do not possess any monopole classes. 

Suppose the solution is irreducible. Let us integrate the above expression over the entire manifold. Ignoring the term involving the covariant derivative of $$\psi$$, we get 

$$\displaystyle \int \frac12 \|\psi\|^4 + \frac14 \int s \|\psi\|^2 \leq 0$$

Therefore, 

$$\displaystyle \begin{aligned}\int \|\psi\|^4 \leq \frac12 \int (-s) \cdot \|\psi\|^2 &\leq \frac12 \left (\int s^2 \right)^{1/2} \left (\int \|\psi\|^4 \right )^{1/2} \\ \implies \int \|\psi\|^4 &\leq \frac14 \int s^2\end{aligned}$$

where we use that $$\psi$$ is not identically zero, by irreducibility. By the nonlinear part of the Seiberg-Witten equations, we have that the norm of $$\rho(F_{B^t})/2$$ is equal to the norm of $$(\psi \psi^*)_0$$, which we compute:

$$\displaystyle \begin{aligned} \|(\psi \psi^*)_0\|^2 &= \frac12 \mathrm{tr} \left ( (\psi \psi^*)_0 \cdot (\psi \psi^*)_0^* \right ) \\ &= \frac12 \mathrm{tr}\left (\psi \psi^* - \frac12 \|\psi\|^2 \cdot 1_S \right )^2 \\ &= \frac12 \left ( \|\psi\|^4 - \frac12 \|\psi\|^4 - \frac12 \|\psi\|^4 + \frac14 \|\psi\|^4 \right ) \\ &= \frac14 \|\psi\|^4 \end{aligned}$$

Thus, $$\|(\psi \psi^*)_0\| = \|\psi\|^2/2$$. Remember that $$\rho$$ preserves norms, so we get norm of $$F_{B^t}$$ with respect to $$g$$ (or the inner product induced on the space of 2-forms thereof) is the same as $$\|\psi\|^2$$. Therefore, 

$$\displaystyle \int \|F_{B^t}\|^2 = \int \|\psi\|^4 \leq \frac14 \int s^2$$

Therefore, $$\|F_{B^t}\|_{L^2} \leq \|s\|_{L^2}/2$$, using $$L^2$$-norms. 

Definition. Let $$(M, g)$$ be a Riemannian $$3$$-manifold. Recall a differential $$2$$-form $$\omega$$ on the manifold is harmonic if $$d\omega = d^*\omega = 0$$. Every cohomology class admits a unique harmonic representative in de Rham cohomology, by Hodge theory. We define the harmonic norm on $$H^2(M; \Bbb R)$$ by setting $$\|\alpha\|_{har, g}$$ to be the $$L^2$$-norm of the unique harmonic $$2$$-form representing the cohomology class $$\alpha$$. 

Corollary. If $$\alpha \in H^2(M; \Bbb R)$$ is a monopole class, then for all metrics $$g$$ on $$M$$, 

$$\displaystyle \|\alpha\|_{har, g} \leq \frac{1}{4\pi} \cdot \|s\|_{L^2(M, g)}$$

This follows from what we derived as $$F_{B^t}$$ represents the class $$2\pi/i \cdot \alpha$$, where $$\alpha = c_1(\mathfrak{s})$$ is the Chern classes associated to the spin structure we started with, and the harmonic form minimizes the $$L^2$$-norm in a given cohomology class.

Finally, we relate the harmonic norm with the Thurston norm for irreducible atoroidal manifolds. Since the Thurston norm is a norm defined on the second homology, we must first dualize it to a norm defined on cohomology. 

Definition. Let $$M$$ be an oriented, closed, irreducible, atoroidal three-manifold with $$b_1(M) \neq 0$$. We define the dual Thurston norm by setting for any $$\alpha \in H^2(M; \Bbb R)$$,

$$\displaystyle \|\alpha\|_{Th} = \sup_{\Sigma} \frac{|\alpha[\Sigma]|}{-\chi(\Sigma)},$$

where $$\Sigma$$ varies over all oriented embedded surfaces in $$M$$ of genus at least $$2$$.

Proposition. The dual Thurston norm and the harmonic norm on an oriented, closed, irreducible, atoroidal three-manifold $$M$$, satisfy the following inequality:

$$\displaystyle \|\alpha\|_{Th} \leq \sup_g \frac{4\pi\|\alpha\|_{har, g}}{\|s(g)\|_{L^2(M, g)}},$$

where $$g$$ varies over all Riemannian metrics on $$M$$ and $$s(g)$$ denotes the scalar curvature of $$(M, g)$$.

Proof. Let us start by fiddling around to see if we get an idea. Pick a metric $$g$$ on $$M$$ and let $$\Sigma$$ be an embedded oriented surface of genus at least $$2$$. Let $$\omega$$ be a $$2$$-form representing the class $$\alpha$$. Then, by the Gauss-Bonnet theorem, $$2\pi\chi(\Sigma)$$ is the integral of the curvature of $$\Sigma$$ with the induced metric from $$(M, g)$$. So,

$$\displaystyle \frac{\alpha[\Sigma]}{-\chi(\Sigma)} = -\frac{2\pi\int_{\Sigma}\omega}{\int_{\Sigma} K d\mathrm{vol}_g}$$

The numerator is bounded by the metric norm on $$\omega$$ (which can be bounded by the harmonic norm) times the volume of $$\Sigma$$, and the denominator is bounded by the $$L^2$$-norm of (half the) scalar curvature attained on $$\Sigma$$ times the volume of $$\Sigma$$. It seems we are awfully close, but $$a \leq b, c \leq d$$ does not mean $$a/c \leq b/d$$. 

The shortcoming of this approach is that we are only focusing on the scalar curvature attained along $$\Sigma$$. We must pick metrics $$g$$ such that the semi-local geometry around $$\Sigma$$ dominates in $$M$$. Let $$g_1$$ be a metric on $$M$$ such that some neighborhood of $$\Sigma$$ in $$M$$ is isometric to $$\Sigma \times [0, 1]$$ with the product metric $$dt^2 + h$$, where $$(\Sigma, h)$$ is a hyperbolic surface of unit area. Let $$g_r$$ be a radial rescaling so that in that neighborhood we have $$g_r = r^2 dt^2 + h$$ and $$g_r = g_1$$ outside a slightly larger neighborhood. Then the same neighborhood with the metric $$g_r$$ is isometric to the product $$\Sigma \times [0, r]$$. Therefore, the $$L^2$$-norm of the scalar curvature is:

$$\displaystyle \begin{aligned} \int s(g_r)^2 \, d\mathrm{vol}_{g_r} &= \int_{\Sigma \times [0, r]} s(g_r)^2 \, d\mathrm{vol}_{g_r} + \int_{M \setminus \Sigma \times [0, 1]} s(g_1)^2 \, d\mathrm{vol}_{g_1} \\ &= (-4\pi\chi(\Sigma))^2 r + C \end{aligned}$$

since $$s(g_r) = 4\pi\chi(\Sigma)$$ on $$\Sigma \times [0, r]$$ and $$d\mathrm{vol}_{g_r} = r \, dt\,  d\mathrm{vol}_h$$, and $$C$$ is a constant independent of $$r$$. Observe also that if $$\omega$$ is any $$2$$-form representing the cohomology class $$\alpha$$, 

$$\displaystyle \begin{aligned} |\alpha[\Sigma]|^2 \leq \left | \int_{\Sigma} \omega \right |^2 \leq \left ( \int_{\Sigma} \|\omega\|_h d\mathrm{vol}_h \right )^2 \leq \|\omega\|_{L^2(\Sigma, h)} ^2 \mathrm{Area}(\Sigma)^2 &= \|\omega\|_{L^2(\Sigma, h)}^2 \\ & \leq r^{-2} \|\omega\|_{L^2(M,g_r)}^2 \end{aligned}$$

Therefore, we have the following equations:

$$\displaystyle \begin{aligned} \|s(g_r)\|_{L^2(M, g_r)} &= -4\pi \chi(\Sigma) r + C' \\ \|\alpha\|_{har, g_r} &\geq r |\alpha[\Sigma]|\end{aligned}$$

where $$C'$$ is a constant independent of $$r$$. Dividing the second by the first, one obtains:

$$\displaystyle \frac{\|\alpha\|_{har, g_r}}{\|s(g_r)\|_{L^2(M, g_r)}} \geq \frac{r |\alpha[\Sigma]|}{ -4\pi \chi(\Sigma) r + C'} \to \|\alpha\|_{Th}$$

as $$r \to \infty$$. This proves the required inequality. 

Remark. As $$r \to \infty$$, the Riemannian manifolds $$(M, g_r)$$ exhibit a neck-stretching along the embedded surface $$\Sigma \subset M$$, and geometrically converges to a manifold with $$\Bbb H^2 \times \Bbb R$$ geometry. My guess is that if the above inequality is optimal, the equality is achieved in this limit.

We now tie everything together by the following theorem:

Theorem. For a closed oriented irreducible atoroidal $$3$$-manifold (also known as a hyperbolic $$3$$-manifold), the monopole classes are contained in the dual Thurston norm-ball. 

Proof. Suppose $$\mathfrak{s}$$ is a spinc structure with $$\alpha = c_1(\mathfrak{s})$$ a monopole class. Let $$g$$ be an auxiliary Riemannian metric on $$M$$. Then combining the inequalities we have deduced above, we get 

$$\displaystyle \|\alpha\|_{Th} \leq \sup_g \frac{4\pi}{\|s(g)\|_{L^2(M, g)}} \cdot \|\alpha\|_{har, g} \leq \sup_g \frac{4\pi}{\|s(g)\|_{L^2(M, g)}} \cdot \frac{1}{4\pi} \cdot \|s(g)\|_{L^2(M, g)} = 1$$

In the follow-up to this post, we will prove the converse direction. Before going there, we need to make a detour from this detour to talk about taut foliations in relation to Thurston norm, and Gabai's theorem on existence of such.