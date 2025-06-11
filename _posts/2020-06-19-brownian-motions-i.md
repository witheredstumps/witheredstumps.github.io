---
layout: post
title: 'Brownian Motions: I'
date: 2020-06-19
type: post
tags:
- brownian-motion
- measure-theory
- random-walk
permalink: "/2020/06/19/brownian-motions-i/"
---

This will be part of (hopefully) a series of notes I will write down whilst preparing for some informal talks in a study group, in the process of understanding Brownian motions. I am reading mainly from Robert Haslhofer's course notes available here, although I might occasionally use other resources, most notably perhaps Durrett's "Probability: Theory and Examples". Be warned that I have a less than adequate understanding of probability and I might make many mistakes and have fundamental misunderstandings; these notes are written mostly for personal bookkeeping purposes. Acknowledgement goes to Ritvik Radhakrishnan and Bhaswar Bhattacharya for going through this with me and pointing out several errors and typos.

A real-valued continuous time stochastic process is a measurable function $$X : \Omega \times [0, \infty) \to \Bbb R$$ for some probability space $$(\Omega, \mathcal{A}, \Bbb {P})$$, which we think of as a family of random variables $$\{X_t\}_{t \geq 0}$$ defined on this probability space. Such a process $$B : \Omega \times [0, \infty) \to \Bbb R$$ is a Brownian motion starting at $$x_0 \in \Bbb R$$ if $$B_0 = x_0$$, the process has independent increments, i.e., for $$0 \leq t_1 < \cdots < t_k$$ the increments $$B_{t_2} - B_{t_1}, \cdots, B_{t_k} - B_{t_{k-1}}$$ are independent random variables and moreover the increments have a Gaussian law: $$B_{t + h} - B_t \sim N(0, h)$$ for any $$t \geq 0$$, $$h > 0$$. Finally, we demand that the process is sample-continuous, that is, the event $$\{\omega \in \Omega : t \mapsto B_t(\omega) \text{ is continuous}\} \subset \Omega$$ contains an $$\mathcal{A}$$-measurable subset of probability $$1$$.

I will devote the post to establishing existence of Brownian motions. A particularly appealing approach is to try to construct a Brownian motion as a random ray on $$\Bbb R$$. To set it up, let us denote $$C[0, \infty)$$ as the space of continuous maps $$\gamma : [0, \infty) \to \Bbb R$$, and $$C_0$$ be the subspace of all such maps $$\gamma$$ such that $$\gamma(0) = 0$$. We equip this space with the compact-open topology, and let $$\mathcal{B}(C_0)$$ denote the Borel $$\sigma$$-algebra. We would like the Brownian motion to be a random variable $$B : (\Omega, \mathcal{A}, \Bbb P) \to (C_0, \mathcal{B}(C_0))$$ valued in this space. We can switch perspectives by trying to construct the pushforward measure $$\mu_B := B_* \Bbb P$$ instead, at which point the Brownian motion will be the random variable defined on the probability space $$(C_0, \mathcal{B}(C_0), \mu_B)$$ tautologically by $$B : (C_0, \mathcal{B}(C_0), \mu_B) \to (C_0, \mathcal{B}(C_0))$$ with $$B(\gamma) = \gamma$$. 

We start by considering open subsets of $$C_0$$ of the following form: Let $$0 < t_1 < \cdots < t_k$$ be a finite sequence of times and $$U_1, \cdots, U_k \subset \Bbb R$$ be open subsets. Define 

$$V(t_1, \cdots, t_k, U_1, \cdots, U_k) = \{\gamma \in C_0 : \gamma(t_i) \in U_i \; \forall\, 1 \leq i \leq k\}$$

Let $$p_t(x, y) := \exp(-(x-y)^2/2t)/\sqrt{2\pi t}$$ denote the density of the normal distribution $$N(x, t)$$ at $$y$$. We define:

$$\displaystyle \mu_B(V(t_1, \cdots, t_k, U_1, \cdots, U_k)) = \int_{U_1 \times \cdots \times U_k} p_{t_1}(0, x_1) \cdots p_{t_k - t_{k-1}}(x_{k-1}, x_k) dx_1 \cdots dx_k$$

One would expect this to be sufficient information to define a probability measure $$\mu_B$$ on the full measure space $$(C_0, \mathcal{B}(C_0))$$. We shall quote the following theorem in order to proceed:

<b>Theorem</b>. (Kolmogorov extension theorem) Let $$(X_i, \mathcal{B}_i)$$ be a family of Borel measure spaces on Polish spaces indexed by $$i \in I$$ an arbitrary indexing set. For any subset $$J \subseteq I$$ let us denote $$X_J = \prod_{j \in J} X_j$$ and $$\mathcal{B}_J = \bigotimes_{j \in J} \mathcal{B}_j$$ be the corresponding product $$\sigma$$-algebra. Let $$\mu_J$$ be a family of probability measures on the measure spaces $$(X_J, \mathcal{B}_J)$$ for every finite subset $$J \subset I$$ which are Kolmogorov consistent, i.e., for any pair of finite subsets $$J_1 \subset J_2$$ of $$I$$, and any measurable set $$A \in \mathcal{B}_{J_1}$$, $$\mu_{J_2}(\pi_{J_2, J_1}^{-1}(A)) = \mu_{J_1}(A)$$. Then there exists a unique probability measure on $$(X_I, \mathcal{B}_I)$$ which is consistent with the family of measures $$\{\mu_J\}_{J \subset I}$$, i.e., for any finite subset $$J \subset I$$, and any measurable set $$A \in \mathcal{B}_I$$, $$\mu(\pi_J^{-1}(A)) = \mu_J(A)$$. 

Let us thus enlarge our probability space to $$\Bbb R^{[0, \infty)}$$ equipped with the product $$\sigma$$-algebra $$\mathcal{B}_{\Bbb R}^{[0, \infty)}$$. For any finite subset $$J = \{t_1 < t_2 < \cdots < t_k\} \subset [0, \infty)$$, our definition for $$\mu_B$$ provides us with a Kolmogorov consistent family of measures $$\mu_J$$ on $$(\Bbb R^J, \mathcal{B}^{\otimes J})$$. Thus, we obtain a measure $$\mu_B$$ on $$(\Bbb R^{[0, \infty)}, \mathcal{B}_{\Bbb R}^{[0, \infty)})$$. 

Unfortunately, we run into a problem. $$C_0 \subset \Bbb R^{[0, \infty)}$$ does not happen to be a measurable set in the product $$\sigma$$-algebra. This is simple enough to see: the product $$\sigma$$-algebra $$\mathcal{B}_{\Bbb R}^{[0, \infty)}$$ is generated by finite cylinder events 

$$\prod_{f \in F} U_f \times \prod_{i \notin F} \Bbb R \subset \Bbb R^{[0, \infty)}$$

where $$F \subset [0, \infty)$$ is finite and $$U_F \subset \Bbb R$$ are Borel. Under countable union of such events, we can form the countable cylinder events $$\prod_{d \in D} U_d \times \prod_{i \notin D} \Bbb R$$ where $$D \subset [0, \infty)$$ is countable. These are clearly closed under further countable unions and complementation, and thus generates a $$\sigma$$-algebra. Hence, these must be all the possible events appearing in the $$\sigma$$-algebra $$\mathcal{B}_{\Bbb R}^{[0, \infty)}$$. Thus, such events must depend only on countably many time coordinates, which $$C_0$$ clearly does not — if continuity of a path was definable by simply looking at countably many points on the path, we would be in trouble!

There is a fairly straightforward analytic fix for this. We switch our point of view to random variables instead of measures once again: So far we have successfully defined a stochastic process 

$$\begin{gather*}B : (\Bbb R^{[0, \infty)}, \mathcal{B}_{\Bbb R}^{[0, \infty)}, \mu_B) \times [0, \infty) \to \Bbb R \\ B(\gamma, t) = \gamma(t)\end{gather*}$$

It is moreover clear from construction that $$B$$ satisfies all the axioms of a Brownian motion except sample-continuity, by the fact that $$\mu_B$$ agrees with an independent vector of normal distributions with variance equal to time-increment on finite cylinder events, which is equivalent to the finite-dimensional distributions of $$B$$ to be equal in distribution to the Gaussian distribution:

$$(B_{t_1}, \cdots, B_{t_k}) \sim N(\mathbf{0}_k, \text{diag}(t_1, t_2 - t_1, \cdots, t_k - t_{k-1}))$$

We shall modify this process to be sample-continuous by appealing once again to Kolmogorov:

<b>Theorem</b>. (Kolmogorov continuity theorem) Let $$X : (\Omega, \mathcal{A}, \Bbb P) \times [0, \infty) \to \Bbb R$$ be a stochastic process. Assume there exists constant $$\alpha, \beta, C > 0$$ such that

$$\displaystyle \Bbb E\vert X_s - X_t\vert ^\beta \leq C \vert s - t\vert ^{1 + \alpha}\;\; \forall \; s, t > 0$$

Then there exists a stochastic process $$Y : (\Omega, \mathcal{A}, \Bbb P) \times [0, \infty) \to \Bbb R$$ such that $$\Bbb P(X_t = Y_t) = 1$$ for all $$t \geq 0$$ such that for any $$\gamma < \alpha/\beta$$, the sample paths of $$Y$$ are locally $$\gamma$$-Holder continuous with probability $$1$$. In particular, $$Y$$ is sample-continuous.

*Proof*. Let us define the sets $$A_n = \{\vert X_{i/2^n} - X_{(i-1)/2^n}\vert  \leq 1/2^{n \gamma} \; \forall\; 0 < i \leq 2^n \}$$. Further, define $$B_N = \bigcap_{n \geq N} A_n$$; it is an easy exercise to check that for any pair of diadic rationals $$s, t$$ such that $$\vert s - t\vert  \leq 1/2^N$$, there exists a constant $$K = K(\gamma)$$ depending only on $$\gamma$$ such that on $B_N$, 

$$\vert X_s - X_t\vert  \leq K \vert s - t\vert ^\gamma$$

Notice that $$\Bbb P(\vert X_{i/2^n} - X_{(i-1)/2^n}\vert  > 1/2^{n\gamma}) \leq \Bbb E \vert X_{i/2^n} - X_{(i-1)}/2^n\vert ^{\beta} \cdot 2^{n \beta \gamma}$$ by Markov inequality applied to $$\beta$$-th exponent. Thus,

$$\displaystyle \begin{aligned}\Bbb P(A_n^c) \leq \sum_{1 \leq i \leq 2^n} P(\vert X_{i/2^n} - X_{(i-1)/2^n}\vert  > 1/2^{n\gamma}) & \leq 2^{n(1+\beta\gamma)} \Bbb E\vert X_{i/2^n} - X_{(i-1)/2^n}\vert ^\beta \\ &\leq C 2^{n(1+\beta \gamma)} 2^{-n(1+\alpha)} = C 2^{-n\lambda}\end{aligned}$$

where $$\lambda = \alpha - \beta \gamma > 0$$, using the hypothesis on the $$\beta$$-th moments of $$X$$ and choice of $$\gamma < \alpha/\beta$$. Thus, $$\Bbb P(B_N^c) \leq \sum_{n \geq N} P(A_n^c) = C 2^{-N \gamma}/(1 - 2^{-\gamma})$$. Since $$\sum_{N \geq 1} \Bbb P(B_N^c) < \infty$$, by the Borel-Cantelli lemma the probability that infinitely many events $$B_N^c, N = N(\omega) \geq 1$$ occur is zero. In particular, for almost every $$\omega \in \Omega$$, there exists $$N = N(\omega) \geq 1$$ such that $$\omega \in B_N$$. Thus, for almost every sample path of $$X$$, there exists $$\delta = \delta(\omega) > 0$$ such that $$\vert X_t - X_s\vert  \leq C \vert t - s\vert ^\gamma$$ holds true whenever $$s, t$$ are diadic rationals such that $$\vert s - t\vert  \leq \delta$$: take $$\delta = 2^{-N}$$.

Finally define the modification $$Y$$ of $$X$$ by setting $$Y_t = X_t$$ if $$t > 0$$ is a diadic rational, otherwise find a sequence $$\{t_n\}$$ of diadic rationals and define $$Y_t = \lim_n X_{t_n}$$ pointwise. This is well-defined since the sample paths $$t \mapsto X_t$$ are almost surely continuous on the diadic rationals, which is a dense subset of $$[0, \infty)$$, hence has a continuous extension to $$[0, \infty)$$. It remains to be seen that $$\Bbb P(X_t = Y_t) = 1$$ for a non-diadic rational $$t > 0$$. For any $$\varepsilon > 0$$, observe

$$\Bbb P(\vert X_t - X_{t_n}\vert  > \varepsilon) \leq \Bbb E\vert X_t - X_{t_n}\vert ^\beta/\varepsilon^\beta \leq C/\varepsilon^\beta \cdot \vert t - t_n\vert ^{1+\alpha}$$

Thus, $$\{X_{t_n}\}$$ converges in probability to $$X_t$$. Since the pointwise limit of this sequence in $$Y_t$$, we are forced to have $$X_t = Y_t$$ almost everywhere. This fully establishes the theorem.

Finally, observe that the process $$B : \Omega \times [0, \infty) \to \Bbb R$$ we constructed earlier has the property in the hypothesis with $$\alpha = 1, \beta = 4$$ since $$B_t - B_s \sim N(0, \vert t - s\vert )$$ for all $$t, s > 0$$, hence has fourth moment proportional to $$\vert t - s\vert ^2$$. Thus, using Kolmogorov's continuity theorem, we can modify $$B$$ to be a sample-continuous process. This concludes the construction of a 1-dimensional Brownian motion.