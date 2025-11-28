---
title: "Lecture 5: Variance, Standard Deviation, and Standardization"
description: "Detailed coverage of variance, standard deviation, coefficient of variation, z-scores, and linear transformations"
sidebar_position: 5
---

# Variance, Standard Deviation, and Standardization

## 📹 Video Overview

<iframe 
  src="https://www.youtube.com/embed/INAMzikueOs" 
  title="Measuring the Remarkable - YouTube video player" 
  width="560" 
  height="315" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>

## 📊 What We're Learning

- How to measure spread/dispersion in data

- Variance and Standard Deviation

- How to compare different datasets

---

## 🎯 Core Concept: Measuring Spread

**The Big Idea:** Average alone isn't enough! Two datasets can have the same average but look totally different.

### Example to Remember:

- **Dataset 1:** 9, 9, 9, 9, 9 (average = 9)

- **Dataset 2:** 1, 4, 9, 12, 19 (average = 9)

Both have the same average, but Dataset 2 is way more spread out!

---

## 📐 Variance (s²)

### What It Measures

How far, on average, each data point is from the mean (but squared).

### Formula

$$s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n}$$

### Memory Hack: "The Three Steps Dance"

1. **Subtract:** Find how far each value is from the mean (xᵢ - x̄)

2. **Square:** Make all differences positive (xᵢ - x̄)²

3. **Average:** Add them up and divide by n

### Why Square?

- Gets rid of negative values (otherwise they'd cancel out!)

- Emphasizes extreme values (outliers get more weight)

### Quick Example

Dataset: 1, 4, 9, 12, 19

- Mean (x̄) = 9

- Variance (s²) = 39.6

---

## 📏 Standard Deviation (s)

### What It Is

Just the **square root of variance** → brings us back to original units!

### Formula

$$s = \sqrt{s^2} = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n}}$$

### Memory Hack

**"Variance's little brother"** → Same thing but in normal units (not squared)

### Why Use It?

- Easier to interpret (same units as your data)

- If measuring height in cm, SD is in cm (not cm²)

### Quick Example

- Variance = 39.6

- Standard Deviation = √39.6 = 6.29

---

## 📊 Frequency Table Version

When data is in a frequency table:

$$s^2 = \frac{\sum_{i=1}^{k} f_i(x_i - \bar{x})^2}{\sum_{i=1}^{k} f_i}$$

### Memory Hack

Same formula, but now **multiply by frequency** (fᵢ) because some values appear more times!

### Example: Coffee Consumption

| Cups (x) | Frequency (f) |
|----------|---------------|
| 0        | 10            |
| 1        | 16            |
| 2        | 12            |
| 3        | 27            |

Each value gets weighted by how often it appears.

---

## 🔄 Linear Transformations (The Magic Rules!)

### Rule 1: Adding/Subtracting a Constant (± a)

**What happens:** NOTHING to variance or SD!

```
New variance = Old variance
New SD = Old SD
```

#### Memory Hack: "Shifting doesn't change spread"

Think of it like moving all your data points together → the spread between them stays the same!

#### Example

- Original scores: 70, 80, 90

- Add 10 to each: 80, 90, 100

- The spread is identical!

---

### Rule 2: Multiplying/Dividing by a Constant (× b or ÷ b)

**What happens:** 

- Variance gets multiplied by b²

- SD gets multiplied by b

$$s'^2 = b^2 \times s^2$$

$$s' = b \times s$$

#### Memory Hack: "Stretching stretches the spread"

- If you double all values → spread doubles

- But variance squares it → 2² = 4

#### Example: Grade Adjustment

Scores: 91, 77, 61, 83, 88, 71, 89

- Mean = 80

- Lecturer adds 5% to each grade

- Multiply by 1.05 (which is b)

- New variance = (1.05)² × old variance = 1.1025 × old variance

- New SD = 1.05 × old SD

---

## 🔍 Coefficient of Variation (CV)

### What It Is

Relative measure of spread → lets you compare different datasets even with different units!

### Formula

$$CV = \frac{s}{\bar{x}}$$

### Memory Hack: "SD per unit of average"

Shows how big the SD is **relative to** the mean.

### When to Use It

Comparing apples to oranges!

#### Example: Height vs Weight

1. **Height:** Mean = 174 cm, SD = 14 cm

   - CV = 14/174 = 0.080 = 8%

2. **Weight:** Mean = 60 kg, SD = 9 kg

   - CV = 9/60 = 0.150 = 15%

**Interpretation:** Students are more homogeneous (similar) in height than weight!

### The Rule

**Lower CV = More homogeneous (less spread)**

---

## ⭐ Z-Score (Standard Score)

### What It Is

Tells you **how many standard deviations** a value is from the mean.

### Formula

$$z = \frac{x_i - \bar{x}}{s}$$

### Memory Hack: "Distance in SD units"

- z = 0 → exactly at average

- z = 1 → one SD above average

- z = -2 → two SDs below average

### Reverse Formula

If you know z-score and want to find the original value:

$$x_i = \bar{x} + (z \times s)$$

---

## 🎓 Z-Score: Practical Example

### The Question

Student got 85 in Statistics and 80 in Economics. Where did they do better?

#### Statistics Course

- Mean = 82, SD = 5

- Student's score = 85

- z = (85 - 82) / 5 = 0.6

#### Economics Course

- Mean = 70, SD = 3

- Student's score = 80

- z = (80 - 70) / 3 = 3.33

**Answer:** Student excelled more in Economics! (3.33 SDs above average vs only 0.6)

---

## 🎯 Z-Score Properties (Super Important!)

No matter what your original data looks like:

$$\text{Mean of all z-scores} = 0$$

$$\text{SD of all z-scores} = 1$$

### Why This Matters

Z-scores **standardize** everything → you can compare different variables!

### Comparison Table

| Student   | Height | Weight | IQ  |
|-----------|--------|--------|-----|
| Evyatar   | 175    | 70     | 100 |
| Iti       | 160    | 70     | 130 |
| Ariel     | 165    | 60     | 90  |
| **Mean**  | 165    | 60     | 100 |
| **SD**    | 10     | 12     | 12  |

#### Calculate z-scores to compare!

- Evyatar height: z = (175-165)/10 = **1.0**

- Iti IQ: z = (130-100)/12 = **2.5** ← Most outstanding!

- Ariel weight: z = (60-60)/12 = **0.0** (exactly average)

---

## 🧠 Memory Hacks Summary

| Concept | Memory Trick |
|---------|--------------|
| Variance | "Average squared distance" |
| SD | "Variance's little brother in normal units" |
| Adding constant | "Shifting doesn't change spread" |
| Multiplying constant | "Stretching stretches the spread" |
| CV | "SD per unit of average" |
| Z-score | "Distance in SD units" |
| Z properties | "Always 0 and 1 after standardizing" |

---

## 🎯 True/False Practice Problems

### Problem 1

**"If distribution is negatively skewed, the z-score of the 5th decile will be negative."**

**Answer:** FALSE!

- 5th decile = median = middle value

- In most distributions, median is near the mean

- Z-score of mean = 0 (or close to it)

- Skewness affects the mean position, but the median's z-score isn't necessarily negative

---

### Problem 2

**"After a 7% salary increase for everyone, Daniela's z-score (originally 2.5) will increase."**

**Answer:** FALSE!

- Everyone gets the same percentage increase

- This is multiplication by constant (× 1.07)

- Z-score stays the same! (both numerator and denominator are multiplied by same amount)

- Her relative position doesn't change

#### Why?

**Original:** $$z = \frac{x_i - \bar{x}}{s}$$

**After:** $$z = \frac{1.07x_i - 1.07\bar{x}}{1.07s} = \frac{1.07(x_i - \bar{x})}{1.07s} = \frac{x_i - \bar{x}}{s}$$

The 1.07 cancels out!

---

## 📝 Quick Reference Formulas

**Variance:**
$$s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n}$$

**Standard Deviation:**
$$s = \sqrt{s^2}$$

**Frequency Table Variance:**
$$s^2 = \frac{\sum_{i=1}^{k} f_i(x_i - \bar{x})^2}{\sum_{i=1}^{k} f_i}$$

**Coefficient of Variation:**
$$CV = \frac{s}{\bar{x}}$$

**Z-Score:**
$$z = \frac{x_i - \bar{x}}{s}$$

**Reverse Z-Score:**
$$x_i = \bar{x} + (z \times s)$$

---

## 🎓 Final Tips

1. **Always check units:** SD should match your data units

2. **Use CV for comparisons:** Different units? Use CV!

3. **Z-scores are universal:** Best for comparing across different scales

4. **Remember the transformation rules:** Save time on exams!

5. **Negative z-score = below average:** Positive = above average

---

**Good luck! 🍀**

