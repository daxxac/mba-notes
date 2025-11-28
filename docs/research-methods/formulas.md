---
title: "Research Methods Formulas"
description: "Complete collection of all formulas from research methods lectures with clear explanations in English"
sidebar_position: 8
---

# Research Methods Formulas

Complete reference guide for all formulas covered in the Research Methods course.

---

## 📊 Frequency Tables and Data Organization

### Relative Frequency

$$p(x) = \frac{f(x)}{n}$$

**Explanation:** The proportion of observations that fall into a specific category. Multiply by 100 to get percentage.

- **p(x)** = relative frequency (proportion)
- **f(x)** = absolute frequency (count)
- **n** = total number of observations

---

### Class Width

$$l = l_1 - l_0$$

**Explanation:** The range covered by each class interval in a frequency table.

- **l** = class width
- **l₁** = upper limit of class
- **l₀** = lower limit of class

---

### Density

$$d = \frac{f(x)}{l}$$

**Explanation:** Frequency per unit width. Essential when comparing classes with different widths in histograms.

- **d** = density
- **f(x)** = frequency
- **l** = class width

---

### Percentage Density

$$d\% = \frac{p(x)}{l}$$

**Explanation:** Relative frequency per unit width. Used for percentage-based density calculations.

- **d%** = percentage density
- **p(x)** = relative frequency
- **l** = class width

---

### Cumulative Frequency

$$F(x) = \sum f(x)$$

**Explanation:** The running total of frequencies up to and including value x. Shows how many observations are "at most" x.

- **F(x)** = cumulative frequency
- **f(x)** = frequency at each value

---

## 📈 Measures of Central Location

### Mean (Arithmetic Average)

**Raw Data:**
$$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} = \frac{x_1 + x_2 + ... + x_n}{n}$$

**From Frequency Table:**
$$\bar{x} = \frac{\sum_{i=1}^{k} x_i \times f_i}{\sum_{i=1}^{k} f_i} = \sum_{i=1}^{k} x_i \times p_i$$

**Explanation:** The sum of all values divided by the count. Most common measure of central tendency. Uses all data points but is sensitive to outliers.

- **x̄** = sample mean
- **xᵢ** = individual value
- **n** = number of observations
- **fᵢ** = frequency
- **pᵢ** = relative frequency

---

### Median

**For Odd n:**
$$\tilde{x} = x_{\frac{n+1}{2}}$$

**For Even n:**
$$\tilde{x} = \frac{x_{\frac{n}{2}} + x_{\frac{n}{2}+1}}{2}$$

**Explanation:** The middle value when data is sorted. Splits data 50-50. Robust to outliers - not affected by extreme values.

- **x̃** = median
- **n** = number of observations

---

### Mode

**Definition:** The value (or category) that appears most frequently.

**For Continuous Variables:** Use the class with highest **density (d)**, not frequency!

**Explanation:** Most common value. Can have multiple modes (bimodal, multimodal). Not affected by outliers but may not represent center well.

---

## 📏 Measures of Dispersion

### Range

$$R = x_{max} - x_{min}$$

**Explanation:** The difference between maximum and minimum values. Simple but heavily affected by outliers.

- **R** = range
- **x_max** = maximum value
- **x_min** = minimum value

---

### Interquartile Range (IQR)

$$IQR = Q = Q_3 - Q_1$$

**Explanation:** The spread of the middle 50% of data. Robust to outliers - only uses values between first and third quartiles.

- **IQR** = interquartile range
- **Q₃** = third quartile (75th percentile)
- **Q₁** = first quartile (25th percentile)

---

### Variance

**Raw Data:**
$$s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n}$$

**From Frequency Table:**
$$s^2 = \frac{\sum_{i=1}^{k} f_i(x_i - \bar{x})^2}{\sum_{i=1}^{k} f_i}$$

**Explanation:** Average of squared deviations from the mean. Measures spread but in squared units. Always ≥ 0. Squaring ensures negative deviations don't cancel positive ones.

- **s²** = sample variance
- **xᵢ** = individual value
- **x̄** = sample mean
- **n** = number of observations
- **fᵢ** = frequency

---

### Standard Deviation

$$s = \sqrt{s^2} = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n}}$$

**Explanation:** Square root of variance. Returns to original units, making it easier to interpret than variance. Most widely used measure of dispersion.

- **s** = standard deviation
- **s²** = variance

---

### Coefficient of Variation

$$CV = \frac{s}{\bar{x}}$$

**Explanation:** Relative measure of spread. Allows comparison between datasets with different units or scales. Lower CV = more homogeneous (less spread).

- **CV** = coefficient of variation
- **s** = standard deviation
- **x̄** = mean

---

## 📍 Location Metrics

### Quartile Positions

**First Quartile (Q₁):**
$$\text{Position} = \frac{n}{4}$$

**Third Quartile (Q₃):**
$$\text{Position} = \frac{3n}{4}$$

**Explanation:** Quartiles divide data into four equal parts. Q₂ is the median (50th percentile). Find the value where cumulative frequency F(x) first exceeds these positions.

- **n** = number of observations

---

### Percentile Position

$$\text{Position} = n \times \frac{z}{100}$$

**Explanation:** Finds the position of the z-th percentile. The value where z% of data falls below and (100-z)% falls above.

- **n** = number of observations
- **z** = percentile (0-100)

---

## ⭐ Standardization

### Z-Score (Standard Score)

$$z = \frac{x_i - \bar{x}}{s}$$

**Explanation:** Number of standard deviations a value is from the mean. Standardizes data to mean=0 and SD=1, allowing comparison across different scales.

- **z** = z-score
- **xᵢ** = individual value
- **x̄** = mean
- **s** = standard deviation

**Properties:**
- Mean of all z-scores = 0
- Standard deviation of all z-scores = 1

---

### Reverse Z-Score

$$x_i = \bar{x} + (z \times s)$$

**Explanation:** Converts a z-score back to the original value. Useful for finding values at specific percentile positions.

- **xᵢ** = original value
- **z** = z-score
- **x̄** = mean
- **s** = standard deviation

---

## 🔄 Linear Transformations

### Adding/Subtracting a Constant

**If zᵢ = xᵢ ± a:**

$$\bar{z} = \bar{x} \pm a$$

$$s_z^2 = s_x^2$$

$$s_z = s_x$$

**Explanation:** Shifting all values by a constant changes the mean but NOT the variance or standard deviation. The spread remains unchanged.

- **a** = constant
- **zᵢ** = transformed values

---

### Multiplying/Dividing by a Constant

**If zᵢ = b × xᵢ:**

$$\bar{z} = b \times \bar{x}$$

$$s_z^2 = b^2 \times s_x^2$$

$$s_z = |b| \times s_x$$

**Explanation:** Scaling all values multiplies the mean and standard deviation by the constant, but variance is multiplied by the constant squared.

- **b** = constant
- **zᵢ** = transformed values

---

## 🔗 Relationships Between Variables

### Covariance

$$cov(x,y) = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{n}$$

**Explanation:** Measures how two variables move together. Positive = both increase together, negative = one increases while other decreases, zero = no linear relationship. Depends on units.

- **cov(x,y)** = covariance
- **xᵢ, yᵢ** = paired observations
- **x̄, ȳ** = means

---

### Pearson Correlation Coefficient

$$r(x,y) = \frac{cov(x,y)}{s_x \times s_y}$$

**Explanation:** Standardized covariance. Always between -1 and +1. Sign shows direction, absolute value shows strength. Independent of units.

- **r** = correlation coefficient (-1 to +1)
- **cov(x,y)** = covariance
- **sₓ, sᵧ** = standard deviations

**Interpretation:**
- |r| = 0.00-0.10: Negligible
- |r| = 0.10-0.39: Weak
- |r| = 0.40-0.69: Medium
- |r| = 0.70-0.89: Strong
- |r| = 0.90-1.00: Very Strong

---

### Variance of a Sum

$$var(x + y) = var(x) + var(y) + 2 \times cov(x,y)$$

**Explanation:** When adding two variables, their combined variance includes individual variances plus twice their covariance. Important for portfolio risk analysis.

- **var(x), var(y)** = individual variances
- **cov(x,y)** = covariance

---

## 📈 Regression Analysis

### Simple Linear Regression Equation

$$y = \beta_0 + \beta_1 x$$

**Explanation:** Predicts dependent variable y from independent variable x using a straight line.

- **y** = dependent variable (predicted)
- **β₀** = intercept (y when x=0)
- **β₁** = slope (change in y per unit change in x)
- **x** = independent variable

---

### Slope (β₁)

$$\beta_1 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n} (x_i - \bar{x})^2}$$

**Alternative form:**
$$\beta_1 = \frac{cov(x,y)}{var(x)}$$

**Explanation:** Rate of change - how much y changes for each 1-unit increase in x. Positive = upward trend, negative = downward trend.

- **β₁** = slope coefficient
- **xᵢ, yᵢ** = paired observations
- **x̄, ȳ** = means

---

### Intercept (β₀)

$$\beta_0 = \bar{y} - \beta_1 \bar{x}$$

**Explanation:** The predicted value of y when x = 0. Ensures the regression line passes through the point (x̄, ȳ).

- **β₀** = intercept
- **ȳ** = mean of y
- **β₁** = slope
- **x̄** = mean of x

---

### Residual (Error)

$$\varepsilon_i = y_i - \hat{y}_i$$

**Where:**
$$\hat{y}_i = \beta_0 + \beta_1 x_i$$

**Explanation:** The difference between actual and predicted values. Positive = point above line, negative = point below line. Sum of squared residuals is minimized in least squares regression.

- **εᵢ** = residual for observation i
- **yᵢ** = actual value
- **ŷᵢ** = predicted value

---

## 📐 Sigma (Summation) Rules

### Rule 1: Sum of a Constant

$$\sum_{i=1}^{n} a = n \times a$$

**Explanation:** Adding the same constant n times equals n multiplied by that constant.

---

### Rule 2: Constant Times Variable

$$\sum_{i=1}^{n} a \times x_i = a \times \sum_{i=1}^{n} x_i$$

**Explanation:** You can factor out a constant from a summation.

---

### Rule 3: Sum of Addition

$$\sum_{i=1}^{n} (x_i + y_i) = \sum_{i=1}^{n} x_i + \sum_{i=1}^{n} y_i$$

**Explanation:** Sum of sums equals sum of each separately.

---

### Rule 4: Sum of Multiplication (⚠️ Cannot Split!)

$$\sum_{i=1}^{n} (x_i \times y_i) \neq \sum_{i=1}^{n} x_i \times \sum_{i=1}^{n} y_i$$

**Explanation:** You CANNOT split multiplication! Must multiply first, then sum.

---

### Rule 5: Sum of Squares (⚠️ Cannot Split!)

$$\sum_{i=1}^{n} x_i^2 \neq \left(\sum_{i=1}^{n} x_i\right)^2$$

**Explanation:** Square each value first, THEN sum. Not the other way around!

---

## 💰 Financial Applications

### Return Calculation

$$\text{Return} = \frac{\text{Price}(t+1) + \text{Dividend} - \text{Price}(t)}{\text{Price}(t)}$$

**Explanation:** Percentage gain or loss from an investment. Includes both price change and dividends.

- **Price(t)** = price at time t
- **Price(t+1)** = price at time t+1
- **Dividend** = dividend payment

---

## 🎯 Quick Reference Summary

| Category | Key Formulas |
|----------|-------------|
| **Central Location** | Mean: x̄ = Σx/n, Median: middle value, Mode: most frequent |
| **Dispersion** | Range: max-min, IQR: Q₃-Q₁, Variance: s², SD: √s² |
| **Standardization** | Z-score: z = (x-x̄)/s, CV: s/x̄ |
| **Relationships** | Covariance: cov(x,y), Correlation: r = cov/(sₓsᵧ) |
| **Regression** | y = β₀ + β₁x, Slope: β₁ = cov/var(x), Intercept: β₀ = ȳ - β₁x̄ |
| **Transformations** | Add ±a: mean changes, variance unchanged. Multiply ×b: mean ×b, variance ×b² |

---

## 💡 Important Notes

1. **Always check units:** Variance is in squared units, standard deviation in original units
2. **Use density (d) for continuous variables** when class widths differ
3. **Correlation ≠ Causation:** r measures association, not cause
4. **Extrapolation warning:** Don't predict outside your data range
5. **Outliers affect:** Mean and variance are sensitive, median and IQR are robust

---

**Last Updated:** Based on Lectures 1-7 of Research Methods course

