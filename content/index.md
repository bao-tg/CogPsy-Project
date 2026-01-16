---
title: Final Report
date: 2024-01-05
tags: [Group-5]
enableMaze: true
enableShortAnswer: true
---

# Introduction

## Context & Mechanism

 In modern academic and professional environments, multitasking is often viewed as a necessary skill for productivity. However, cognitive psychology research, specifically Broadbent's filter model of attention or the [[note/Filler Theory of Attention]] (Broadbent, 1958), suggests that the attentional system is serial rather than parallel when processing response selections. In addition, the central executive, a component of [[note/Working Memory]]  proposed by Baddeley and Hitch (1974), acts as a coordinator that reallocates mental resources when an individual must move from one cognitive operation to another that leads to slower memory load. This process of switching tasks appears to cause a delay between the first task and another task (Rubinstein et al, 2001).

<p align="center">
    <img src="/media/workingmem.png" style="max-width:80%; height:auto;" alt="working memory  Model" />
</p>
<p align="center"> Fig 1.  Baddeley and Hitch model</p>

Thus, when individuals attempt to perform two attention-demanding tasks simultaneously, they experience a phenomenon called "cognitive switch cost" - a delay caused by the executive control processes required to disengage from one task rule set and engage another.

## The Problem (The "Gap")

Despite the strong evidence for switch costs, many university students continue to study in environments rife with digital distractions, operating under the metacognitive illusion that they are "good multitaskers." While previous studies (Spelke, Hirst, & Neisser, 1976) have established that multitasking degrades performance, there is a need to replicate these findings in a student-specific context to demonstrate the tangible loss in accuracy (error rate) that occurs during typical academic tasks. In another research by Finley and colleagues (2014), people are still conducting multi-task, despite having knowledge and prediction about their performance reduction or failure. 

## The Current Study

Therefore, this project aims to quantify the cost of [[note/Divided Attention]] on task efficiency by comparing error rates between a single-task condition and a frequent-switching condition. This research is significant as it provides empirical evidence to challenge the popular student belief that multitasking is an efficient study strategy.

# Research Question

> [!Note] “Does multitasking-induced working memory load impair performance in cognitive-related tasks? To what extent does single-tasking versus divided attention affect the error rate of cognitively demanding tasks?”

# Hypothesis

Participants in the single-task condition will complete the assigned task with fewer errors than those in the switching condition.

# Methodology

## Participants

All of the students in the class. (n = 19)

## Research design

### Primary test: International Olympiad in Linguistic (IOL)

**Source:** https://ioling.org/ 

**Information:** The test challenges participants to analyze the grammar, structure, culture, and history of different languages and to demonstrate their linguistic abilities through puzzles and problem-solving challenges. The IOL encourages creativity and imagination and helps participants develop skills in language analysis and problem-solving. Due to the time constraints of only 15 minutes, we had developed a new IOL-style test adapted from the original format, preserving its core objectives while aligning the structure to fit the available timeframe.

**Rationale:** The IOL is structured to be entirely self-contained, requiring no previous linguistic training. This design aligns with Cattell’s (1963) criteria for measuring fluid intelligence ([[note/Cartell's Criteria for Measuring Fluid Intelligence]]), which emphasize the ability to solve novel problems without relying on acquired knowledge. Participants must infer abstract rules from unfamiliar data, which makes the task resemble a pure reasoning task. However, research suggests that [[note/Working Memory]] ex problem solving (Kyllonen, 1996) ([[note/Working Memory Capacity and General Intelligence]]). Although fluid intelligence and working memory  capacity are closely related, they are not identical constructs and do not explain exactly the same variance in cognitive performance (Conway et al., 2003; Schmiedek et al., 2007). Therefore, IOL performance should not be understood as reflecting fluid intelligence alone, but also as heavily dependent on [[note/Working Memory]]  processes.

Note that the IOL is a novel test, solely measuring the participants' reasoning; thereby, advanced language skills are not required. Therefore, no language-relevant bias. Additionally, participants haven’t heard about the test (we will conduct a survey on the day of experiment), so, no prior knowledge bias.

#### Sample IOL test

The file below showed the sample ILO's test and sample questions. 

> Reader can try to work on our sample test by starting the quiz in the right box.

![[media/Cognitive_Experiments.pdf]]
<p align="center"> Sample IOL test</p>

### Secondary test: Maze Puzzle

**About the test:** Participants are given a maze, which has two doors, and exactly 1 path that connects these doors. The role of participants is finding that path.

**Rationale:** Solving a maze puzzle requires the central executive in [[note/Working Memory]] to control the information, setup goals, and planning. Therefore,  this is a perfect task for being a secondary test that distracts the participants’ [[note/Working Memory]]. 

The puzzles will be randomly generated with the same difficulty (same size, e.g 20x20) to ensure there will be no selection bias.

> The readers can also try our maze sample at the top-right corner (Desktop only).

### Procedure

All of the participants are divided into two groups:

Group 1: Requires to do the IOL test, within 15 minutes.

Group 2: Requires to do the IOL test, with a total of 15 minutes. For every 5 minutes, they are required to solve a maze puzzle (2 in total); the time spent in solving the maze puzzle isn’t counted in the total time of solving the IOL test.

When the participants finish, their test IOL (solution:  https://ioling.org/results/best_solutions/)  score will be the main measurement for their performance. The results will be recorded by our team, ready for the discussion and conclusion.

## Variables

**Dependent variable:** The score of the IOL test.

**Independent variable:** Type: between-subjects manipulation with 2 levels — No-distraction vs Distraction (switch task every 5 min, and solve 1-min 2D maze).

# Result Analysis

<p align="center">
    <img src="/media/score_dist.png" style="max-width:80%; height:auto;" alt="Working Memory Model" />
</p>
<p align="center"> Fig 2.  Test score distribution</p>

Group 1 shows a relatively wide spread of scores, ranging from 2 to 5.5. The most frequent score is 3, but the scores are fairly distributed across the higher end. Group 2 scores are much more concentrated, with a strong cluster around 3. The score distribution is heavily left-skewed.

Better performance was observed in Group 1 (No Distraction), M = 3.89 and SD = 1.19. This shows that without any distractions, students were able to utilize their [[note/Working Memory]] more effectively to solve complex tasks like the linguistic puzzle. 

In contrast, Group 2 (Distraction) had a lower mean score (M = 2.95) and a significantly lower standard deviation (SD = 0.50). This suggests that the requirement to switch tasks every five minutes created a [[note/Divided Attention]] condition that acted as a "cognitive ceiling," suppressing individual performance variability and lowering overall accuracy.

<p align="center">
    <img src="/media/maze_plot.png" style="max-width:80%; height:auto;" alt="Working Memory Model" />
</p>
<p align="center"> Fig 3. Number of students who successfully solved the maze (Out of ten students)</p>

Furthermore, the data indicate that Group 2 "learned" to solve the secondary task, with maze completion rates jumping from 30% to 80%. However, this improvement in the secondary task did not result in better primary task scores. This suggests that as participants engaged with maze puzzles, they likely experienced [[note/Retroactive Interference]], making it harder to retrieve the encoded grammar for the IOL test.

# Discussion

## The capacity of working memory is limited (cognitive load)

[[note/Working Memory]] is a limited-capacity system that allows individuals to temporarily hold and manipulate information while performing cognitive tasks (Oberauer et al., 2016). To successfully solve IOL problems, participants must actively maintain multiple pieces of information while engaging in inductive reasoning and pattern recognition. These processes rely heavily on the ability to manipulate and update information in [[note/Working Memory]], requiring visuospatial processing and goal-directed planning, which draw on different cognitive resources from linguistic reasoning. As a result, frequent task switching forced participants to reallocate attention and repeatedly disengage from and re-engage with the IOL task. This introduced task-switching costs and increased cognitive load, making it more difficult to maintain relevant linguistic information in [[note/Working Memory]].

<p align="center">
    <img src="/media/overload_workingmem.jpg" style="max-width:80%; height:auto;" alt="Working Memory Model" />
</p>
<p align="center"> Fig 4. Overload working memory</p>


Overall, the findings of this study suggest that the lower performance due to observed under [[note/Divided Attention]] is not simply due to reduced reasoning ability, but rather to limitations in [[note/Working Memory]] capacity when cognitive demands are high. The maze task acted as a competing demand that disrupted information maintenance and problem-solving processes, supporting the idea that multitasking can impair performance on complex cognitive tasks by overloading [[note/Working Memory]].

## Divided attention causes lower performance

[[note/Divided Attention]] is the ability to perform two or more tasks/stimuli simultaneously. One of the earliest theories that predicted the relationship between [[note/Divided Attention]] and multitasking ability was Capacity Theory (Kahneman, 1973), the person’s multitasking ability heavily depends on the resource, or attention, that the tasks required. Kahneman argued that we can split the attention to do tasks simultaneously, but the more we divide it, the worse the tasks can be accomplished.

Research shows that those people who multitask, for instance, write down spoken words while simultaneously reading and understanding unrelated material, lead to poor performance in both tasks (Spelke, Hirst, & Neisser, 1976). However, Spelke et al. (1976) explored that, if the participants were trained intensively on the aforementioned task, they successfully learned to do the task with no performance decrements in either task. This finding  clearly showed that, if a task isn’t automated, there is no “multitasking”, it’s just switching tasks back and forth.

<p align="center">
    <img src="/media/divided_attention.jpg" style="max-width:80%; height:auto;" alt="Working Memory Model" />
</p>
<p align="center"> Fig 5. Divided Attention (by William Hemsley)</p>

And hence solving ILO tests, a task requires heavy problem-solving/reasoning skills, and a maze puzzle requires visuospatial sketchpad’s capacity, both tasks require huge capacity of the cognitive ability. Moreover, the participants had no prior time to intensively train for the test, which means that the task isn't fully automated. Therefore, it is predictable that group 2’s score is lower than group 1.

## Working memory disruption via retroactive interference

[[note//Retroactive Interference]] refers to the disruption of previously learned information by introducing new material, particularly when the first task’s memory has not yet been consolidated (Nieuwenstein & Wyble, 2014). In our study, the maze task is the [[note/Retroactive Interference]] because it was introduced after participants had participated in IOL test, making it more likely that this new information interfered with earlier encoded task rules rather than the reverse (i.e. IOL as [[note/Retroactive Interference]]).

<p align="center">
    <img src="/media/retroactive.avif" style="max-width:80%; height:auto;" alt="Working Memory Model" />
</p>
<p align="center"> Fig 6. Illustration of Retroactive Interference</p>

The IOL task requires sustained reasoning over time, and the linguistic information held in [[note/Working Memory]] may not have been fully consolidated before the maze task was introduced. Upon solving the maze, Group 2 participants were required to process completely irrelevant spatial information, placing extra demands on the central executive. According to Baddeley (1974), the central executive responsible for controlling attentional resources has limited capacity and cannot focus on way too many tasks at once. Thus when multiple tasks place demands on this system simultaneously, they are competing for processing capacity which can reduce performance on the primary task or even both tasks.

As a result, the maze task information interfered with earlier IOL information, making it harder for participants to return to the original task with clarity. This provides an even deeper and plausible cognitive explanation for the lower accuracy observed in Group 2’s [[note/Divided Attention]] condition.

# Limitations

Despite the differences between the two groups’ performance proving our null hypothesis on the effect of multitasking, we still need to identify limitations of this experiment. Firstly, the IOL test only focuses on reasoning skills, rather than reflecting on the overall learning ability of students. We do not have sufficient information to prove that Group 1 was better than Group 2 simply because they focused on one task, or was it also because they have higher problem solving skill or learning ability. Besides, most participants are university bilingual students; the experiment’s results might not be generalizable to monolingual people, different age ranges, or real-world multitasking scenarios (e.g., answering a phone call or using mobile phone while driving). 

# Conclusions

Based on the collected data from conducting the multi-tasking experiment, in the second group, the maze puzzle introduces new skills and goals to interrupt the linguistic reasoning previously that had been held in the [[note/Working Memory]] through the IOL test. This inference lowers their performance by lowering the accuracy of their IOL test result. Therefore, the study demonstrates that multitasking can impair the required memory trace and reasoning processes for tasks with cognitive required. Thus, people or specifically students, shouldn’t overload their [[note/Working Memory]] when doing cognitive-related tasks by multitasking (e.g. doing two cognitively demanding tasks at the same time). Also avoiding other distractions, such as phone use, notifications, conversations during learning, as these things cause retroactive inference, overload [[note/Working Memory]], which reduce the comprehension, accuracy and overall learning quality. 



# Reference

+ Alance AB. (n.d.). Maze Generator. https://www.mazegenerator.net/
+ Baddeley, A. D., & Hitch, G. (1974). Working memory. In Psychology of learning and motivation (pp. 47–89). Elsevier. https://doi.org/10.1016/s0079-7421(08)60452-1
+ Cattell, R. B. (1963). Theory of fluid and crystallized intelligence: A critical experiment. Journal of Educational Psychology, 54(1), 1–22. https://doi.org/10.1037/h0046743
+ Conway, A. R. A., Kane, M. J., & Engle, R. W. (2003). Working memory capacity and its relation to general intelligence. Trends in Cognitive Sciences, 7(12), 547–552. https://doi.org/10.1016/j.tics.2003.10.005
+ Fischer, R., & Plessow, F. (2015). Efficient multitasking: Parallel versus serial processing of multiple tasks. Frontiers in Psychology, 6, Article 13666. https://doi.org/10.3389/fpsyg.2015.01366
+ Finley, J. R., Benjamin, A. S., & McCarley, J. S. (2014). Metacognition of multitasking: How well do we predict the costs of [[note/Divided Attention]]? Journal of Experimental Psychology: Applied, 20(2), 158–165. https://doi.org/10.1037/xap0000010
+ Harrison, A. H., Ling, S., & Foster, J. J. (2023). The cost of [[note/Divided Attention]] for detection of simple visual features primarily reflects limits in post-perceptual processing. [Journal name, Volume(Issue), pages]. (Complete details not provided)
+ IOLing_official. (n.d.). Best solutions. International Linguistics Olympiad. https://ioling.org/results/best_solutions/
Kahneman, D. (1973). Attention and effort. https://s3.amazonaws.com/knowen-production/big_attachments/fdf0161367c4801ac8b5a6cc42e8413d/Attention+and+Effort+-+Kahneman.pdf
+ Kyllonen, P. C. (1996). Is working memory capacity Spearman’s g? In I. Dennis & P. Tapsfield (Eds.), Human abilities: Their nature and measurement (pp. 49–75). Psychology Press. https://doi.org/10.4324/9780203774007-4
+ Liefooghe, B., Barrouillet, P., Vandierendonck, A., Camos, V., & Noël, N. (2008). Working memory costs of task switching. Journal of Experimental Psychology: Learning, Memory, and Cognition, 34(3), 478–494. https://doi.org/10.1037/0278-7393.34.3.478
+ Nieuwenstein, M., & Wyble, B. (2014). Beyond a mask and against the bottleneck: Retroactive dual-task interference during working memory consolidation of a masked visual target. Journal of Experimental Psychology: General, 143(3), 1409–1427. https://doi.org/10.1037/a0035257
+ Oberauer, K., Farrell, S., Jarrold, C., & Lewandowsky, S. (2016). What limits working memory capacity? Psychological Bulletin, 142(7), 758–799. https://doi.org/10.1037/bul0000046
+ Schmiedek, F., Oberauer, K., Wilhelm, O., Süß, H.-M., & Wittmann, W. W. (2007).
+ Individual differences in components of reaction time distributions and their relations
to working memory and intelligence. Journal of Experimental Psychology: General,
136(3), 414–434. https://doi.org/10.1037/0096-3445.136.3.414
+ Spelke, E., Hirst, W., & Neisser, U. (1976). Skills of [[note/Divided Attention]]. Cognition, 4(3), 215–230. https://doi.org/10.1016/0010-0277(76)90018-4