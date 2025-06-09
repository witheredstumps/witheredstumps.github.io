---
layout: post
title: 'Jacobi fields: Part II'
date: 2020-05-05
type: post
tags:
- differential-geometry
- cat(k)
permalink: "/2020/05/05/jacobi-fields-part-ii/"
---

In the previous post we solved the Jacobi equation explicitly for Riemannian 2-manifolds of constant curvature and saw how the norm of the Jacobi field behaves over time depending on the curvature. We also understood what our results say about the deviation of geodesics on the manifold. Here we shall do some general estimations to unearth the precise relation between these quantities.

Let $$(M, g)$$ be a Riemannian manifold and $$\gamma : [0, c] \to M$$ a geodesic starting at $$\gamma(0) = p$$ with $$\gamma'(0) = v$$. Let $$J$$ be a Jacobi field along $$\gamma$$ with initial conditions $$J(0) = 0$$, $$J'(0) = w$$ for some vector $$w \in T_v T_p M$$. Define $$f : [0, c] \to \Bbb R$$ to be 

$$f(t) = g(J(t), J(t)) = \|J(t)\|^2$$

We shall compute the Taylor expansion of $$f$$ near $$0$$. Let us use the shorthand $$J' = \nabla_{\gamma'} J$$ for ease of notation. Clearly, we have $$f(0) = 0$$, $$f'(0) = 2 g(J(0), J'(0)) = 0$$, and since $$J(0) = 0$$, we have

$$f''(0) = 2 g(J'(0), J'(0)) + 2 g(J(0), J''(0)) = 2 \|w\|^2$$

For the higher order terms we recall the Jacobi equation:

$$J'' + R(J, \gamma')\gamma' = 0$$

We find $$f'''(0) = 6g(J''(0), J'(0)) + 2g(J(0), J'''(0))$$. By the above, $$J''(0) = -R(J(0), v)v = 0$$. So, we obtain $$f'''(0) = 0$$ as well. Finally, 

$$f^{\mathrm{IV}}(0) = 8 g(J'''(0), J'(0)) + 6 g(J''(0), J''(0)) + 2 g(J(0), J^{\mathrm{IV}}(0))$$  

Note that $$J''' = - \nabla_{\gamma'} R(J, \gamma')\gamma'$$. Recall the following symmetry of the Riemann curvature tensor:

$$g(R(U, V)Z, W) = g(R(Z, W)U, V) = -g(R(V, U)Z, W)$$

Let $X$ be an auxiliary vector field. Then we get:

$$\displaystyle \begin{aligned} g(\nabla_{\gamma'} R(J, \gamma') \gamma', X) & = \gamma' g(R(J, \gamma') \gamma', X) - g(R(J, \gamma') \gamma', \nabla_{\gamma'} X) \\ & = -\gamma' g(R(\gamma', X) \gamma', J) - g(R(J, \gamma') \gamma', \nabla_{\gamma'} X) \\ & = - g(\nabla_{\gamma'} R(\gamma', X)\gamma', J) - g(R(\gamma', X)\gamma', J') - g(R(J, \gamma') \gamma', \nabla_{\gamma'} X)\end{aligned}$$

Evaluating this expression at $$t = 0$$, we see using $$J(0) = 0$$ that the first and third term vanishes. Thus, 

$$g(\nabla_{\gamma'} R(J, \gamma') \gamma', X) = g(-R(\gamma', J') \gamma', X)$$

for all $$X$$. In particular, pluggin $$X = \gamma'$$, we obtain 

$$\nabla_{\gamma'} R(J, \gamma') \gamma' = -R(\gamma', J')\gamma'$$

So we get $$J'''(0) = R(v, w)v$$, and plugging this in we therefore obtain $$f^{\mathrm{IV}}(0) = 8 g(R(v, w)v, w)$$. Now, the sectional curvature of the 2-plane $$\sigma \subset T_p M$$ spanned by $$v$$ and $$w$$ is 

$$K_p(\sigma) = \frac{g(R(v, w)w, v)}{\|v\|^2 \|w\|^2 - g_p(v, w)},$$

and $$\|v\|^2 \|w\|^2 - g_p(v, w) = \mathrm{Area}(\sigma)^2$$ so $$f^{\mathrm{IV}}(0) = - 8 K_p(\sigma) \mathrm{Area}(\sigma)^2$$. 

With all the derivatives at hand, we do a fourth order Taylor expansion of $$f$$ around the origin to obtain:

$$\displaystyle \begin{aligned} & f(t) = f(0) + f'(0) t + f''(0) \frac{t^2}{2!} + f'''(0) \frac{t^3}{3!} + f^{\mathrm{IV}}(0) \frac{t^4}{4!} + o(t^5) \\ \implies & \|J(t)\|^2 = \|w\|^2 t^2 - \frac{K_p(\sigma) \mathrm{Area}(\sigma)^2}{3} t^4 + O(t^5) \\ \implies & \|J(t)\| = \|w\| t - \frac{K_p(\sigma) \mathrm{Area}(\sigma)^2}{6 \|w\|} t^3 + O(t^4) \end{aligned}$$

We can interpret the linear term as the growth of the Jacobi field along the ray passing through $$0$$ in the direction of $$v$$ in the tangent space $$T_p M$$, and the formula tells us that there's a cubic error between the deviation of geodesics on $$T_p M$$ and on $$M$$ which depends on the sectional curvature $$K_p(\sigma)$$.

A quick application of the ideas above gives a relatively deep result: Suppose $$M$$ is a complete Riemannian manifold which is everywhere non-positively curved, i.e., for any point $$p \in M$$ and a 2-plane $$\sigma \subset T_p M$$, $$K_p(\sigma) \leq 0$$. If $$\gamma : [0, \infty) \to M$$ is a geodesic and $$J$$ is a nontrivial Jacobi field along $$\gamma$$ with $$J(0) = 0$$, the function $$f(t) = \|J(t)\|^2$$ is convex: 

$$\begin{aligned} \displaystyle f''(t) &= 2 g(J', J') + 2 g(J'', J)  \\ &= 2\|J'\|^2 - 2g(R(J, \gamma')\gamma', J) \\ &= 2\|J'\|^2 - 2 K_p(\sigma) \mathrm{Area}(\sigma)^2 \geq 0 \end{aligned}$$

where $$\sigma$$ is the 2-plane spanned by $$\gamma'(t)$$ and $$J(t)$$. Since sectional curvatures are nonpositive, this implies $$f''(t) \geq 0$$, hence $$f$$ is convex, as required. Moreover as $$J'(0) \neq 0$$, $$J' \neq 0$$ in a neighborhood of $$0$$, thus $$f$$ is strictly convex in a neighborhood of $$0$$. Since $$f(0) = 0$$ and a convex non-negative function can never "climb down" to $$0$$, we conclude $$f(t) > 0$$ for all $$t \in [0, \infty)$$. Thus $$J \neq 0$$ throughout $$(0, \infty)$$. This says there are no pairs of conjugate points in $$M$$, which implies the exponential map $$\exp_p : T_p M \to M$$ has no critical points, i.e., it's a local diffeomorphism. If $$K \subset M$$ is a compact subset, then as $$d_M(p, -)$$ is a continuous function on $$M$$, it restricts to a continuous function on $$K$$ hence attains a maximum value $$m$$ on $$K$$. Thus $$K \subseteq \exp_p(B(0; m))$$, hence $$\exp_p^{-1}(K)$$ is a bounded closed subset of $$T_p M$$. Thus, $$\exp_p$$ is a proper local diffeomorphism, hence a covering map.

So we just proved every complete nonpositively curved Riemannian manifold $$M$$ has universal cover diffeomorphic to $$\Bbb R^n$$. This fact, known as the Cartan-Hadamard theorem, is remarkable, because since $$\Bbb R^n$$ is contractible this means $$M$$ is a $$K(\pi_1 M, 1)$$-space, i.e., all the higher homotopy groups are trivial. Curvature constraints thus pose nontrivial restrictions on the topology! We shall prove a positive curvature analogue, but we would need to introduce a new quantity to state the theorem: 

Define for any two vector fields $$X, Y$$ on $$M$$ the bundle endomorphism 

$$\begin{gather*}R : TM \to TM \\ R(Z) := R(Z, X)Y\end{gather*}$$

The trace of $$R$$ is defined to be the Ricci curvature which we denote as $$\mathrm{Ric}_p(X, Y) = \text{tr}~ R_p$$. This is a pointwise defined quantity in the sense that $$\mathrm{Ric}_p(X, Y)$$ only depends on $$X(p), Y(p)$$, which follows from the analogous property of the Riemann curvature tensor. If we choose an orthonormal basis $$\mathbf{e}_1, \cdots, \mathbf{e}_n$$ of $$T_p M$$, then the matrix of $$R$$ with respect to this basis is $$(g(R(X, \mathbf{e}_i)Y, \mathbf{e}_j))_{ij}$$. Therefore,

$$\displaystyle \begin{align*} \mathrm{Ric}_p(X, Y) &= \sum_{i = 1}^n g(R(\mathbf{e}_i, X)Y, \mathbf{e}_i) \\ \implies \mathrm{Ric}_p(\mathbf{e}_n, \mathbf{e}_n) &= \sum_{i = 1}^{n-1} K_p(\mathbf{e}_i, \mathbf{e}_n) \end{align*}$$ 

Here, $$K_p(\mathbf{e}_i, \mathbf{e}_n)$$ is the sectional curvature corresponding to the 2-plane spanned by $$\mathbf{e}_i, \mathbf{e}_n$$ in $$T_p M$$, for $$1 \leq i \leq n-1$$. Note there is one less term in the expression as the last term vanishes. 

Here is some motivation for the Ricci curvature. Choose normal coordinates $$(x^1, \cdots, x^n)$$ around the point $$p \in M$$ by pushing forward Euclidean coordinates by the exponential map $$\exp_p : T_p M \dashrightarrow M$$. Let $$(\partial_1, \cdots, \partial_n)$$ be the induced frame on the normal neighborhood. We envision the metric $$g$$ as a smoothly-varying assignment of symmetric matrices at every point on the normal neighborhood, with entries $$g_{ij}(x) = g_x(\partial_i, \partial_j)$$. Let $$\mathbf{x} = (x_1, \cdots, x_n)$$ be a point in the normal neighborhood and consider the radial geodesic $$\gamma : [0, 1] \to M$$ defined by $$\gamma(t) = t \mathbf{x}$$, and let $$J$$ be a Jacobi field along $$\gamma$$. Along $\gamma$, we write $$J(t) = \sum t J_i \partial_i$$. Therefore, 

$$\|J(t)\|^2 = t^2 \sum_{i, j = 1}^n g_{ij}(t\mathbf{x}) J_i J_j$$

We plug all of these in the Taylor's expansion formula for norm of the Jacobi field derived above:

$$\displaystyle \sum_{i, j} g_{ij}(t\mathbf{x}) J_i J_j t^2 = \sum_{i, j} g_{ij}(0) J_i J_j t^2 - \frac{g(R(\gamma'(0), J'(0))J'(0), \gamma'(0))}{3} t^4 + O(t^5)$$

Note that $$\gamma'(0) =\sum_i \partial_i$$ and $$J'(0) =\sum_i J_i \partial_i$$. By multilinearity of the Riemann curvature tensor, we calculate:

$$\displaystyle \begin{aligned} g(R(\gamma'(0), J'(0))J'(0), \gamma'(0)) &= g \left ( R \left ( \sum_i \partial_i, \sum_j J_j \partial_j \right ) \sum_k J_k \partial_k, \sum_l \partial_l \right ) \\ &= \sum_{i, j, k, l} g(R(\partial_i, \partial_j)\partial_k, \partial_l) J_j J_k \end{aligned}$$

Let us denote $$R_{ijkl} := g(R(\partial_i, \partial_j)\partial_k, \partial_l)$$, the coordinate form of the full curvature 4-tensor given by $$R(X, Y, Z, W) = g(R(X, Y)Z, W)$$. We also note that $$g_{ij}(0) = \delta_{ij}$$ since we are working with normal coordinates.  Plugging everything above,

$$\displaystyle \sum_{i, j} g_{ij}(t\mathbf{x}) J_i J_j = \sum_{i, j} \delta_{ij} J_i J_j - \frac{t^2}{3} \sum_{i, j, k, l} R_{ijkl} J_j J_k  + O(t^3)$$

Therefore the Taylor expansion for the metric $$g$$ in the normal coordinates must be of the form (carefully note that we switched around some indices)

$$\displaystyle g_{ij}(\mathbf{x}) = \delta_{ij} - \frac{1}{3} \sum_{k, l} R_{iklj} x_k x_l + O(\|\mathbf{x}\|^3)$$

Recall the Riemannian volume form is given by $$d\mathrm{vol}_g = \sqrt{\det(g)} dx_1 \wedge \cdots \wedge dx_n$$. The above also gives a Taylor expansion formula for the Riemannian volume form:

$$\displaystyle \begin{aligned} & \det(g(\mathbf{x})) = 1 - \frac13 \sum_{k, l} \mathrm{Ric}_p(\partial_k, \partial_l) x_k x_l + O(\|\mathbf{x}\|^3) \\ \implies & d\mathrm{vol}_g = \left (1 - \frac16 \sum_{k, l} \mathrm{Ric}_p(\partial_k, \partial_l) x_k x_l+ O(\|\mathbf{x}\|^3) \right ) dx_1 \wedge \cdots \wedge dx_n\end{aligned}$$

Where we used $$\mathrm{Ric}_p(\partial_k, \partial_l) = \sum_i R_{ikli}$$. Thus the Ricci curvature measures the the quadratic defect in the volume form on $$M$$ from the Euclidean volume form on the flat tangent space $$T_p M$$. 

Suppose $$M$$ is a complete Riemannian $$n$$-manifold and $$\gamma : [0, \ell] \to M$$ be an arclength parametrized minimizing geodesic with $$\gamma(0) = p$$ and $$\gamma(\ell) = q$$. Let $$\mathbf{e}_1, \cdots, \mathbf{e}_n$$ be an orthonormal basis of parallel vector fields along $$\gamma$$, such that $$\mathbf{e}_n = \gamma'$$. Define $$X_i = \sin(\pi t/\ell) \mathbf{e}_i$$. Let $$\mathcal{E}$$ be the energy functional we defined earlier; from the second variation formula we compute

$$\displaystyle \begin{aligned} h\mathcal{E}(\gamma)(X_i, X_i) & = -2 \int_\gamma g(\nabla^2_{\gamma'} X_i + R(X_i, \gamma')\gamma', X_i) \\ & = 2 \int_\gamma \sin^2(\pi t/\ell) (\pi^2/\ell^2 - K(\mathbf{e}_i, \mathbf{e}_n)) \\ \implies \sum_{i = 1}^{n-1} h\mathcal{E}(\gamma)(X_i, X_i) & = 2\int_\gamma \sin^2(\pi t/\ell) ((n-1)\pi^2/\ell^2 - \mathrm{Ric}(\mathbf{e}_n, \mathbf{e}_n)) \end{aligned}$$

Suppose $$\mathrm{Ric}(\mathbf{e}_n, \mathbf{e}_n) > (n-1)\pi^2/\ell^2$$. Then at least one of the terms $$h\mathcal{E}(\gamma)(X_i, X_i)$$ must be negative. Observe that since $$\gamma$$ is arclength parametrized, the energy of the path $$\mathcal{E}(\gamma) = \int_\gamma \|\gamma'\|^2 = \ell$$ is exactly the arclength. Since $$\gamma$$ is a minimizing geodesic, $$\ell < \mathrm{length}(\sigma)$$ for any other path $$\sigma$$ with $$\sigma(0) = p$$ and $$\sigma(\ell) = q$$, and by Cauchy-Schwarz inequality, $$\mathrm{length}(\sigma)^2 \leq \ell \cdot \mathcal{E}(\sigma)$$. Combining we get $$\mathcal{E}(\gamma) \leq \mathcal{E}(\sigma)$$, therefore $$\gamma$$ is also an energy minimizer. This forces $$h\mathcal{E}(\gamma)$$ to be positive semi-definite on $$T_\gamma \Omega_{p, q}$$ by the "second-derivative test" (it's easy to convince yourself that this continues to hold in our infinite dimensional context), which leads to a contradiction. Thus, $$\mathrm{Ric}(\mathbf{e}_n, \mathbf{e}_n) \leq (n-1)\pi^2/\ell^2$$. 

In summary we have proved that if $$M$$ is a complete Riemannian manifold of dimension $$n$$ such that $$\mathrm{Ric} \geq (n-1)/R^2$$ for some $$R > 0$$, then every minimizing geodesic has length at most $$\pi R$$, hence $$\text{diam}(M) \leq \pi R$$ and in particular $$M$$ is compact, since $$M = \exp_p(B(0; \pi R))$$. This is known as the Bonnet-Myers theorem. A topological consequence is that if $$M$$ is a complete Riemannian manifold with Ricci curvature bounded below by a positive constant then $$\pi_1(M)$$ is finite: this is because the universal cover $$\widetilde{M}$$ also has Ricci curvature bounded below by a positive constant as it is locally isometric to $$M$$, and thus the fibers of the universal covering map $$\widetilde{M} \to M$$, which is in bijection to $$\pi_1(M)$$, must be finite. It is worth noting that if the sectional curvature satisfies $$K \geq 1/R^2$$ then the hypothesis $$\mathrm{Ric} \geq (n-1)/R^2$$ is automatically satisfied.

We proceed to do some more Jacobi field estimates. Consider a geodesic hinge consisting of two geodesics $$\gamma_1$$ and $$\gamma_2$$ emerging from the fulcrum $$\gamma_1(0) = \gamma_2(0) = p$$ with direction vectors $$\gamma_1'(0) = v$$ and $$\gamma_2'(0) = w$$. We shall improve the infinitisimal estimate regarding dispersion of geodesics above to a local estimate, by Taylor expanding the distance between $$\gamma_1(t)$$ and $$\gamma_2(t)$$; this is realized by length of a minimal geodesic joining them if $$t$$ is small, and we call this the closing edge of the hinge. 

To set up the calculation, define a variation 

$$\begin{gather*}V : [0, \varepsilon) \times [0, 1] \to M \\ V(s, t) = \exp_{\gamma_1(s)}(t \exp_{\gamma_1(s)}^{-1} \gamma_2(s))\end{gather*}$$

Here $$V(s, \cdot)$$ are the minimal geodesics joining $$\gamma_1(s)$$ and $$\gamma_2(s)$$, parametrized to unit time, therefore note in particular that $$V$$ is not a variation in our earlier sense of the word, since it does not leave endpoints of the geodesics fixed, but nonetheless we can compute with it. Let $$T := V_* \partial_t$$ denote the tangent field along these geodesics and $$J := V_* \partial_s$$ denote the transverse vector field, which are Jacobi fields along these geodesics. Since $$V(s, \cdot)$$ is parametrized to run a unit time, the norm of $$T(s, \cdot)$$ computes the length of this geodesic which is the distance between $$\gamma_1(s)$$ and $$\gamma_2(s)$$. In particular, $$T(0, \cdot) \equiv 0$$ is the zero vector field as the curve $$V(0, \cdot)$$ is the constant geodesic at the fulcrum $$p$$. However, $$J(0, \cdot)$$ is the linear vector field $$J(0, t) = v + t(w - v)$$ along this constant curve; more meaningfully this formula should be understood as a formula for the restriction of $$V^* J$$ to the edge $$\{0\} \times [0, 1]$$ of the domain of $$V$$ (alternatively, one can understand the region given by the image of $$V$$ to be a submanifold with corners in $$M$$ and set up an appropriate notion of vector fields on manifolds with corners). We define $$f : [0, \varepsilon) \to M$$ by 

$$\displaystyle f(s) = \mathrm{dist}^2(\gamma_1(s), \gamma_2(s)) = \|T(s, 0)\|^2$$

We follow the same routine as earlier. Denote $$T(s) := T(s, 0)$$ and $$T' := \nabla_{\partial_s} T$$. Observe $$f(0) = 0$$, $$f'(0) = 2 g(T(0),  T'(0)) = 0$$ since $$T(0) = 0$$. Note that $$\nabla_{\partial_s} T = \nabla_{\partial_t} J$$ and 

$$T'(0) = \nabla_{\partial_t} J(0, \cdot) = w - v,$$

since $$J(0, t) = v + t(w - v)$$. Hence we get 

$$f''(0) = 2 g(T'(0), T'(0)) + 2 g(T''(0), T(0)) = 2\|w - v\|^2$$

Next, we have the formula 

$$f'''(0) = 6 g(T''(0), T'(0)) + 2 g(T'''(0), T(0))$$

To compute $$T''(0)$$ we involve the Riemann curvature tensor: 

$$\displaystyle \nabla^2_{\partial_s} T = \nabla_{\partial_s} \nabla_{\partial_t} J = \nabla_{\partial_t} \nabla_{\partial_s} J + R(J, T) J$$

As $$T(0) = 0$$ the second term vanishes. Observe that $$\nabla_{\partial_s} J$$ vanishes along the two edges of the hinge, as $$J(\cdot, 0)$$ and $$J(\cdot, 1)$$ are tangent to $$\gamma_1$$ and $$\gamma_2$$ respectively, since they are geodesics. Thus if we show $$\nabla_{\partial_t} \nabla_{\partial_s} J$$ is parallel along the edge $$\{0\} \times [0, 1] \subset [0, \varepsilon) \times [0, 1]$$, we will be through, since parallel vector fields along curves vanishing at endpoints must be zero throughout. We proceed to compute using the Jacobi equation:

$$\begin{aligned} \nabla_{\partial_t} \nabla_{\partial_t} \nabla_{\partial_s} J &= \nabla_{\partial_t} \nabla_{\partial_s} \nabla_{\partial_t} J + \nabla_{\partial_t} R(T, J)J \\ &= \nabla_{\partial_s} \nabla^2_{\partial_t} J + R(T, J)\nabla_{\partial_t} J + \nabla_{\partial_t} R(T, J)J \\ &= -\nabla_{\partial_s} R(J, T)T + R(T, J)\nabla_{\partial_t} J + \nabla_{\partial_t} (R(T, J)J) \end{aligned}$$

To compute the covariant derivatives of the curvature terms we use the same trick as earlier. Let $$X$$ be an auxiliary vector field and observe 

$$\displaystyle \begin{aligned}g(\nabla_{\partial_s} R(J, T)T, X) &= \partial_s g(R(J, T)T, X) - g(R(J, T)T, \nabla_{\partial_s} X) \\ &= \partial_s g(R(T, X)J, T) - g(R(J, T)T, \nabla_{\partial_s} X) \\ &= g(\nabla_{\partial_s} R(T, X)J, T) + g(R(T, X)J, \nabla_{\partial_s} T) - g(R(J, T)T, \nabla_{\partial_s} X)\end{aligned}$$

$$\displaystyle \begin{aligned}g(\nabla_{\partial_t} R(T, J)J, X) &= \partial_t g(R(T, J)J, X) - g(R(T, J)J, \nabla_{\partial_t} X) \\ &= -\partial_t g(R(J, X)J, T) - g(R(T, J)J, \nabla_{\partial_t} X) \\ &= -g(\nabla_{\partial_t} R(J, X)J, T) - g(R(J, X)T, \nabla_{\partial_t} J) - g(R(T, J)J, \nabla_{\partial_t} X)\end{aligned}$$

Since $$T(0) = 0$$ and $$\nabla_{\partial_s} T = \nabla_{\partial_t} J$$ vanishes along $$\{0\} \times [0, 1]$$, we conclude that both expressions above vanish. As $X$ was arbitrary, $$\nabla_{\partial_s} R(J, T)T = \nabla_{\partial_t} R(T, J)J = 0$$ when evaluated along $$V(0, \cdot)$$. This concludes the proof of $$(\nabla_{\partial_t} \nabla_{\partial_t} \nabla_{\partial_s} T)(0, \cdot) \equiv 0$$ hence $$(\nabla_{\partial_t} \nabla_{\partial_s} T)(0, \cdot) \equiv 0$$ and thus $$T''(0) = 0$$. Combining, we get $$f''(0) = 0$$. 

Finally, observe $$f^{\mathrm{IV}}(0) = 8 g(T'''(0), T'(0)) + 6 g(T''(0), T''(0)) + 2 g(T(0), T^{\mathrm{IV}}(0))$$. From prior calculations all but the first term vanishes since $$T''(0) = T(0) = 0$$. 

$$\displaystyle \nabla^3_{\partial_s} T = \nabla_{\partial_s} \nabla_{\partial_s} \nabla_{\partial_t} J = \nabla_{\partial_s} R(J, T)J + \nabla_{\partial_s} \nabla_{\partial_t} \nabla_{\partial_s} J$$

To compute $$g(\nabla_{\partial_s} R(J, T)J, \nabla_{\partial_s} T)$$ we use the earlier trick:

$$\displaystyle \begin{aligned} g(\nabla_{\partial_s} R(J, T)J, \nabla_{\partial_s} T) &= \partial_s g(R(J, T)J, \nabla_{\partial_s} T) + g(R(J, T)J, \nabla_{\partial_s}^2 T) \\ &= \partial_s g(R(J, \nabla_{\partial_s} T)J, T) + g(R(J, T)J, \nabla_{\partial_s}^2 T) \\ &= g(\nabla_{\partial_s} R(J, \nabla_{\partial_s} T)J, T) + g(R(J, \nabla_{\partial_s} T)J, \partial_s T) + g(R(J, T)J, \nabla_{\partial_s}^2 T) \end{aligned}$$

Since $$T(0) = 0$$, the first and last term vanishes evaluated at $$\{0\} \times [0, 1]$$. Moreover, $$J(0) = v$$ and $$\nabla_{\partial_s} T(0, \cdot) = w - v$$. Thus, the final expression is 

$$g(\nabla_{\partial_s} R(J, T)J, \nabla_{\partial_s} T) = g(R(v, w - v)v, w - v) = g(R(v, w)v, w)$$

Therefore, we have

$$\displaystyle T'''(0) = g(R(v, w)v, w) + g(\nabla_{\partial_s} \nabla_{\partial_t} \nabla_{\partial_s} J, \nabla_{\partial_s} T)\vert_{\{0\} \times [0, 1]}$$

Thus, the last term must be independent of $$t$$. Explicitly, we have 

$$g(\nabla_{\partial_s} \nabla_{\partial_t} \nabla_{\partial_s} J, \nabla_{\partial_s} T)\vert_{\{0\} \times [0, 1]} = \partial_t \partial_s g(\nabla_{\partial_s} J, \nabla_{\partial_s} T)$$

which therefore implies $$\partial_s g(\nabla_{\partial_s} J, \nabla_{\partial_s} T)$$ is linear in $$t$$. Remember that $$\nabla_{\partial_s} J$$ vanishes at the top and bottom edges of the hinge, and therefore so does $$\nabla_{\partial_s}^2 J$$. This implies 

$$\partial_s g(\nabla_{\partial_s} J, \nabla_{\partial_s} T) = g(\nabla_{\partial_s}^2 J, \nabla_{\partial_s} T) + g(\nabla_{\partial_s} J, \nabla^2_{\partial_s} T)$$ 

vanishes at $$(s, t) = (0, 0)$$ and $$(s, t) = (0, 1)$$ respectively. Since it is linear on $$t$$, this forces the quantity to be identically zero! Thus, $$f^{\mathrm{IV}}(0) = 8 g(R(v, w)v, w)$$. By Taylor's formula:

$$\displaystyle \begin{aligned}& f(s) = \|v - w\|^2 s^2 + \frac{1}{3} g(R(v, w)v, w) s^4 + O(s^5) \\ \implies & \mathrm{dist}(\gamma_1(s), \gamma_2(s)) = \|v - w\| s - \frac{K(v, w) \mathrm{Area}(v, w)}{6 \|v-w\|} s^3 + O(s^4)\end{aligned}$$

This is completely analogous to the estimates for the norm of a Jacobi field that we had made earlier. Thus, deviation of geodesics on Riemannian manifolds behave exactly like Jacobi fields predict it to be.