---
title: GEPROG
description: Identification and optimization of dynamic systems using genetic programming and evolution strategies.
timespan: 1998 - 2001
status: Completed
images: ["https://placehold.co/600x400"]
---

Genetic Programming (GP) was originally developed to generate programs by imitating the natural evolution, that solve a given task. As programming languages, initially small subsets were selected from languages that easily machined valid programs could be generated. This was necessary so that the variation of intermediate solutions simulated by mutation and recombination generated not strong structural breaks.

The project GEPROG was to design a system based on genetic programming and evolution strategies method that generates for a given problem area, the modeling of nonlinear dynamic systems and the controller synthesis for non-linear plants, solutions that deliver real representation. These solutions are generated in a form interpretable by the user, so that they can post-process the results and feed them back into the optimization process.

The target language in the resulting tool are block diagrams for the simulation system MATLAB/SIMULINK. A two-stage evolutionary process was designed where proposed structure variants from a GP algorithm are re-optimized using parameter optimization based on evolution strategies. This incorporated the principle of strong causality, ensuring that small changes in the appearance of a solution lead to small changes in quality, making direct search method optimization feasible.

A complete tool was developed during the project and successfully tested in industrial applications, especially useful in data-driven modeling of non-linear systems and controller generation for systems with unknown or complex dynamics.

Project partner:

- Lohnert, F.; Schütte, A.; Sprave, J. (DaimlerChrysler AG, Forschung und Technologie FT3/AI)
- Rechenberg, I.; Boblan, I.; Raab, U.; Santibáñez Koref, I. (Technische Universität Berlin, Fachgebiet Bionik und Evolutionstechnik)
- Banzhaf, W.; Keller, R.; Niehaus, J.; Rauhe, H. (Informatik Centrum Dortmund e.V.)
