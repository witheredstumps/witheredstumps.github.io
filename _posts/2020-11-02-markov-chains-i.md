---
layout: post
title: 'Markov Chains: I'
date: 2020-11-02
type: post
tags:
- dynamical-systems
- ergodic-theory
- markov-chains
permalink: "/2020/11/02/markov-chains-i/"
---

Broadly speaking, a discrete-time dynamical system is a "space" $$X$$ along with a transformation $$T : X \to X$$, in an appropriate category of "spaces" (topological spaces, measure spaces, ...). I think of a discrete Markov chain as a discrete-time dynamical system where the transformation $$T$$ behaves "randomly". Before illustrating this in detail let me reproduce the precise definition, based on Lecture 10 of the course notes [here](https://sites.google.com/view/parthanilroy/home/teaching/stoch_proc).  

We shall say a discrete-time stochastic process $$\{X_n\}_{n \geq 0}$$ takes values in a countable "state space" $$S$$ if $$\mathrm{Range}(X_n) \subseteq S$$ for all $$n \geq 0$$ and $$S$$ is countable. Without loss of generality, we can throw away the "irrelevant states" and let $$S = \bigcup_{n \geq 0} \mathrm{Range}(X_n)$$.  We fix a probability distribution $$\mathbf{a} = (a_k : k \in S)$$ on the state space, i.e., $$0 \leq a_k \leq 1$$ for all $$k \in S$$, such that $$\sum_{k \in S} a_k = 1$$. Furthermore, let $$P = (p_{ij})_{i, j \in S}$$ be a $$\|S\| \times \|S\|$$-dimensional matrix with elements indexed by $$S \times S$$, such that for all $$i, j \in S$$, $$0 \leq p_{ij} \leq 1$$ and $$\sum_{j \in S} p_{ij} = 1$$ for all $$i \in S$$.

A discrete-time stochastic process $$\{X_n\}_{n \geq 0}$$ taking values in a countable state space $$S$$ is a discrete, time-stationary, countable-state space Markov chain with initial distribution $$\mathbf{a}$$ and transition probability matrix $$P$$ if $$X_0 \sim \mathbf{a}$$, and for all $$n \in \Bbb N$$, $$i_0, i_1, \cdots, i_n \in S$$, 

$$\Bbb P(X_0 = i_0, X_1 = i_1, \cdots, X_n = i_n) = a_{i_0} p_{i_0 i_1} p_{i_1 i_2} \cdots p_{i_{n-1} i_n}$$

Let us compute the distribution of $$X_n$$ on $$S$$ explicitly: For any $$i \in S$$, 

$$\displaystyle \begin{aligned}\Bbb P(X_n = i) &= \sum_{i_0, \cdots, i_{n-1} \in S} \Bbb P(X_n = i, X_{n-1} = i_{n-1}, \cdots, X_0 = i_0) \\ &= \sum_{i_0, \cdots, i_{n-1} \in S} a_{i_0} p_{i_0 i_1} \cdots p_{i_{n-2} i_{n-1}} p_{i_{n-1} i} = (\mathbf{a}^\mathsf{T} P^n)_i\end{aligned}$$

Therefore, $$X_n \sim \mathbf{a}^\mathsf{T} P^n$$. Note that therefore the distribution of the process $$\{X_n\}_{n \geq 0}$$ depends linearly on the initial distribution $$\mathbf{a}$$ on $$S$$; to be precise let $$\mathscr{P}(S)$$ denote the space of probability distributions on $$S$$, then the transition matrix $$P$$ acts on this space by multiplying by a row vector on the left: $$T : \mathscr{P}(S) \to \mathscr{P}(S)$$, $$\mathbf{a} \mapsto \mathbf{a}^\mathsf{T} P$$, which preserves convex combinations, and the result of iterating this operator $$n$$ times is the same as running the Markov process for time $$n$$, starting from the initial distribution $$\mathbf{a}$$. Since the space of probability distributions on $$S$$ is convex hull of the Dirac masses $$\delta_i$$, $$i \in S$$, it suffices to understand the process for these initial distributions. We get,

$$\displaystyle T(\delta_i) = \sum_{j \in S} p_{i j} \delta_j$$

Thus, we abuse notation and write the map $$T : S \to \mathscr{P}(S)$$. Note that for any $$i \in S$$, $$T(i)$$ is the law of the conditional distribution $$X_{n+1} \| X_n = i$$ for any $$n \geq 0$$. $$T$$ is vaguely like a map $$T : S \to S$$ determining a dynamical system on $$S$$, but the dynamics is no longer deterministic; pushing a point $$i \in S$$ forward by $$T$$ does not give a point but a "probability cloud" $$T(i) \in \mathscr{P}(S)$$ which associates to $$j \in S$$ the probability $$p_{ij}$$. I learnt this interpretation from Vadim Kaimanovich, and I find it to be an efficient way of thinking. This operator $$T$$ is called a Markov kernel. We shall understand the iterates $$T^k$$, $$k \geq 2$$ to be determined by the rows of the $$k$$-step transition matrix $$P^k$$.

One can recover the stochastic process $$\{X_n\}_{n \geq 0}$$ on $$S$$ from the Markov kernel as follows: Fix an initial distribution $$\mathbf{a}$$ on $$S$$ and define a probability measure $$\Bbb P_{\mathbf{a}}$$ on $$S^{\Bbb N_0}$$ by defining it on cylinder events in a natural way:

$$\displaystyle \Bbb P_{\mathbf{a}}(\{\omega \in S^{\Bbb N_0} : \omega_0 = s_0, \omega_1 = s_1, \cdots, \omega_k = s_k\}) = a_{s_0} T(s_0)(s_1) \cdots T(s_{k-1})(s_k)$$

One can think of the probability space $$(S^{\Bbb{N}_0}, \mathscr{C}, \Bbb{P}_\mathbf{a} )$$ as the background space of all sample paths the Markov chain can take, starting with initial distribution $$\mathbf{a}$$ and transition matrix $$P$$, with each path carrying their individual likelihoods. Finally, let $$\Sigma : S^{\Bbb N_0} \to S^{\Bbb N_0}$$ be the right-shift operator, and define 

$$\displaystyle X_n := X_0 \circ \Sigma^{\circ n} : (S^{\Bbb N_0}, \mathscr{C}, \Bbb P_{\mathbf{a}}) \to S$$ 

This gives a straightforward way of speaking of several notions in dynamical systems in the context of Markov chains. If $$(X, T)$$ is a dynamical system, $$A \subseteq X$$ is a subset, we can speak of the hitting time function $$\tau_A : X \to \Bbb N \cup \{\infty\}$$, defined by $$\tau_A(x) = \inf \{k \geq 0 : T^k(x) \in A\}$$, to be the first time the forward-orbit of $$x$$ goes inside $$A \subseteq X$$ under iterates $$T$$. Clearly, $$\tau_A(x) = 0$$ if $$x \in A$$ and $$A \subset X$$ is forward-invariant, i.e., $$T(A) \subseteq A$$ if and only if $$\tau_{X \setminus A}(x) = \infty$$ for all $$x \in A$$. In the context of a Markov chain, we define a random variable-valued hitting time  $$\tau_A$$ for any subset $$A \subseteq S$$ by 

$$\displaystyle \tau_A(i) = \inf\{k \geq 0 : (X_k\|X_0 = i) \in A\}$$

We shall say the state $$i \in S$$ leads to the state $$j \in S$$ if $$\Bbb P(\tau_j(i) < \infty) > 0$$. It is easy to see this happens if and only if the set of sample paths in $$S^{\Bbb N_0}$$ which reach $$j$$ in some finite time has positive $$\Bbb P_i$$-probability, or equivalently $$(P^n)_{ij} > 0$$ for some $$n \in \Bbb N_0$$. This is a reflexive, transitive (since $$P^{n+m} = P^n P^m$$) relation on $$S$$ but is not going to be symmetric in general. An easy example is the deterministically monotone Markov chain on $$\Bbb Z$$ with kernel $$T : \Bbb Z \to \mathscr{P}(\Bbb Z)$$ given by $$T(k) = \delta_{k+1}$$, shifting mass one step to the right. Any state only leads to states to the right of it. So we can say that the states that $$i \in S$$ leads to form the "forward-orbit" of $$i$$ in this "fuzzy" dynamical system. A subset $$C \subset S$$ is said to be closed if $$\Bbb P(\tau_{S \setminus C}(i) = \infty) = 1$$ for all $$i \in C$$, hence these are the forward-invariant subsets of the Markov chain.

We can symmetrize the said relation to form an equivalence relation $$\sim$$ on $$S$$, by defining $$i \sim j$$ iff $$i$$ leads to $$j$$ as well as $$j$$ leads to $$i$$, and in this case state $$i$$ is said to communicate with state $$j$$. The $$\sim$$-equivalence classes in $$S$$ are called communication classes. States achievable in backward time are also achievable in forward time within a communication class. A Markov chain is said to be irreducible if the state space consists of only one communication class. In the measurable space of sample paths $$(S^{\Bbb N_0}, \mathscr{C})$$, the irreducibility hypothesis essentially says that the paths do not stay trapped in a tube $$A^{\Bbb N_0}$$ forever, for some subset $$A \subset S$$, which would be a proper communication class if this situation occurs. This vaguely suggests that running an irreducible Markov process from any point will initiate a dynamical system which is chaotic in some sense. 

Let us work towards making the last remark incredibly precise. Let $$S$$ be a finite state space, $$P$$ be a transition matrix on this state space. Recall that $$P : \mathscr{P}(S) \to \mathscr{P}(S)$$ acts on the convex set of probability distributions on $$S$$ by multiplication on the left, $$\mathbf{a} \mapsto \mathbf{a}^\mathsf{T} P$$. Since $$S$$ is a finite state space, $$\mathscr{P}(S)$$ as a subset of $$\Bbb R^S$$ has exactly $$S$$-many extreme points given by the Dirac masses at the points of $$S$$, which makes it a simplex of dimension $$\|S\| - 1$$. A simplex is a topological disk, and multiplying on the left by $$P$$ gives a continuous self-map of this disk, which has to have a fixed point by Brouwer's fixed point theorem. 

Thus, there exists a probability vector $$\mathbf{\pi}$$ such that $$\mathbf{\pi}^\mathsf{T} P = \mathbf{\pi}^\mathsf{T}$$; such a vector is called a stationary distribution for the Markov chain. If $$P$$ is irreducible, there is in fact a unique stationary distribution: Observe that kernel of the matrix $$I - P$$ is the space of harmonic functions on the weight graph on $$S$$ determined by the Markov chain, that is, $$P f = f$$ if and only if $$f(x) = \sum_{y \in S} P_{x, y} f(y)$$ for all $$x \in S$$. By irreducibility, the weighted graph is connected in the sense that, for any two states in $$S$$, there is a path of positive weight connected them in the said graph. Since $$S$$ is finite, such a function $$f$$ must attain a minimum, which forces it to be constant everywhere by connectedness. This implies $$\dim \ker(I - P) = 1$$, hence $$\dim \ker(I - P^\mathsf{T}) = 1$$ as well. This shows kernel of $$I - P^\mathsf{T}$$ is $$1$$-dimensional, which forces $$\pi$$ to be the unique stationary distribution for the Markov chain.

<b>Theorem</b>. Let $$S$$ be a finite state space, and $$T : S \to \mathscr{P}(S)$$ be the Markov kernel for an irreducible Markov chain on $$S$$. Let $$\pi$$ be the corresponding unique stationary distribution. Then, 

$$\Sigma : (S^{\Bbb N_0}, \mathscr{C}, \Bbb P_\pi) \to (S^{\Bbb N_0}, \mathscr{C}, \Bbb P_\pi)$$

is an ergodic transformation.

*Proof*. First of all, $$\Sigma$$ is easily checked to be measure preserving since $$\pi$$ is a stationary measure. Suppose $$A \subset S^{\Bbb N_0}$$ is a $$\Sigma$$-invariant subset, that is, $$\Sigma^{-1}(A) = A$$. Consider the random variable $$Z : (S^{\Bbb N_0}, \mathscr{C}, \Bbb P_\pi) \to \{0, 1\}$$, $$Z = \mathbf{1}_A$$. Define the random variables $$Z_k = \Bbb E[Z\|X_0, \cdots, X_k]$$ for $$k \geq 0$$. Clearly, $$\Bbb E[Z_{k+1}\|X_0, \cdots, X_k] = Z_k$$ so $$\{Z_k\}_{k \geq 1}$$ forms a discrete-time martingale. Moreover, this martingale is bounded since $$\Bbb E[\|Z_k\|] \leq \Bbb E[\|Z\|]$$ for all $$k \geq 1$$. Therefore, by Martingale Convergence Theorem, $$Z_k \to Z_\infty$$ almost surely, where the only possibility is $$Z_\infty = \Bbb E[Z\|X_1, X_2, \cdots] = Z$$ since the $$\sigma$$-algebra generated by $$X_1, X_2, \cdots$$ is the full product $$\sigma$$-algebra on $$S^{\Bbb N_0}$$, taking conditional expectation with respect to which returns the random variable itself.

Note that by $$\Sigma$$-invariance of $$A$$, $$Z \circ \Sigma^n = Z$$ for all $$n \geq 1$$. Thus, 

$$\begin{aligned}\displaystyle Z_k(\omega) &= \Bbb E[Z\|X_0 = \omega_0, \cdots, X_k=\omega_k] \\ &= \Bbb E[Z \circ \Sigma^k\|X_0=\omega_0, \cdots, X_k=\omega_k] \\ &= \Bbb E[Z \circ \Sigma^k\|X_k=\omega_k] \\ &= \Bbb E[Z\|X_0=\omega_k]\end{aligned}$$

For every $$\omega \in S^{\Bbb N_0}$$. As $$Z_k \to Z$$ almost surely, for $$\Bbb P_\pi$$-almost every $$\omega \in S^{\Bbb N_0}$$ we get $$\Bbb E[Z\|X_0 = \omega_k] = Z(\omega)$$. By irreducibility, for every state $$s \in S$$, $$\Bbb P_\pi$$-almost every sample path visit $$s$$ infinitely often. Thus, $$Z = \Bbb E[Z\|X_0 = s]$$ almost surely for every state $$s \in S$$. In particular, $$Z$$ is a degenerate random variable, so $$\Bbb P_\pi(A)$$ is either $$0$$ or $$1$$. This establishes ergodicity.