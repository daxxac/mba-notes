---
title: "Key Formulas Reference"
description: "Quick reference guide for all important financial formulas from Principles of Finance course"
sidebar_position: 11
---

# Key Formulas Reference

Quick reference for all important formulas in Principles of Finance.

---

## Time Value of Money

### Present Value (PV)

```math
\text{PV} = \frac{\text{FV}}{(1 + r)^t}
```

Where:
- **FV** = Future Value
- **r** = Discount rate (interest rate)
- **t** = Time period

**Use**: Calculate today's value of future cash flows.

---

### Future Value (FV)

```math
\text{FV} = \text{PV} \times (1 + r)^t
```

Where:
- **PV** = Present Value
- **r** = Interest rate
- **t** = Time period

**Use**: Calculate future value of money invested today.

---

### Net Present Value (NPV)

```math
\text{NPV} = \sum_{t=0}^{n} \frac{CF_t}{(1+r)^t}
```

Or simplified:

```math
\text{NPV} = \text{Present Value of Future Cash Flows} - \text{Initial Investment}
```

Where:
- **CF_t** = Cash flow in period t
- **r** = Discount rate
- **t** = Time period

**Decision Rule**:
- NPV > 0 → Accept project
- NPV < 0 → Reject project
- NPV = 0 → Indifferent

---

## Interest Calculations

### Simple Interest

```math
\text{Interest} = \text{Principal} \times \text{Rate} \times \text{Time}
```

**Use**: Interest calculated only on principal amount.

---

### Compound Interest

```math
\text{Future Value} = \text{Principal} \times (1 + \text{Rate})^{\text{Time}}
```

**Use**: Interest calculated on principal plus accumulated interest.

---

## Annuities

### Present Value of Ordinary Annuity

```math
\text{PV}_{\text{annuity}} = \text{Payment} \times \frac{1 - (1 + r)^{-n}}{r}
```

Where:
- **Payment** = Regular payment amount
- **r** = Interest rate per period
- **n** = Number of periods

**Use**: Value today of series of equal future payments.

---

### Future Value of Annuity

```math
\text{FV}_{\text{annuity}} = \text{Payment} \times \frac{(1 + r)^n - 1}{r}
```

**Use**: Value at end of period of series of equal payments.

---

### Present Value of Growing Annuity

```math
\text{PV}_{\text{growing annuity}} = \text{Payment} \times \frac{1 - \left(\frac{1 + g}{1 + r}\right)^n}{r - g}
```

Where:
- **Payment** = First payment amount
- **g** = Growth rate
- **r** = Discount rate (must be > g)
- **n** = Number of periods

**Use**: Value of payments growing at constant rate over fixed period.

---

## Perpetuities

### Present Value of Perpetuity

```math
\text{PV}_{\text{perpetuity}} = \frac{\text{Payment}}{r}
```

Where:
- **Payment** = Constant payment amount
- **r** = Required rate of return

**Use**: Value of constant payments continuing forever.

---

### Present Value of Growing Perpetuity

```math
\text{PV}_{\text{growing perpetuity}} = \frac{\text{Payment}}{r - g}
```

Where:
- **Payment** = First payment amount
- **r** = Required rate of return (must be > g)
- **g** = Growth rate

**Use**: Value of payments growing forever at constant rate.

---

## Stock Valuation

### Gordon Growth Model (Constant Growth Model)

```math
\text{Stock Price} = \frac{D_1}{r - g}
```

Where:
- **D₁** = Next year's expected dividend
- **r** = Required rate of return (must be > g)
- **g** = Constant dividend growth rate

**Use**: Value stocks with constant dividend growth.

**Important**: Always use D₁ (next year's dividend), not D₀ (current dividend).

---

### Holding Period Return (HPR)

```math
\text{HPR} = \frac{P_1 - P_0}{P_0}
```

Where:
- **P₁** = Ending price
- **P₀** = Beginning price

**Use**: Calculate return over a holding period.

---

## Required Return Components

### Required Return Decomposition

```math
\text{Required Return} = \text{Real Rate} + \text{Expected Inflation} + \text{Risk Premium}
```

**Components**:
- **Real Rate**: Compensation for delaying consumption (2-3%)
- **Expected Inflation**: Purchasing power protection
- **Risk Premium**: Compensation for uncertainty

---

## Merton's Model - Payoff Functions

### Senior Debt Payoff

```math
\text{Senior Debt Payoff} = \min(V_T, F_1)
```

**Alternative form:**
```math
\text{Senior Debt Payoff} = V_T - \max(V_T - F_1, 0)
```

Where:
- **V_T** = Asset value at maturity
- **F₁** = Promised payment to senior debt

**Interpretation**: Risky Bond = Risk-Free Bond - Put Option

---

### Junior Debt Payoff

```math
\text{Junior Debt} = \min(F_2, \max(V_T - F_1, 0))
```

**Alternative form:**
```math
\text{Junior Debt} = V_T - \text{Senior Debt} - \text{Equity}
```

Where:
- **F₂** = Promised payment to junior debt
- **F₁** = Promised payment to senior debt
- **V_T** = Asset value at maturity

---

### Equity Payoff

```math
\text{Equity Payoff} = \max(V_T - (F_1 + F_2), 0)
```

Where:
- **V_T** = Asset value at maturity
- **F₁ + F₂** = Total debt obligation

**Interpretation**: Equity = Call option on firm's assets with strike price = total debt

---

## Asset Pricing Models

### Geometric Brownian Motion

```math
dV = \mu V \, dt + \sigma V \, dW
```

Where:
- **V** = Asset value
- **μ** = Expected return (drift)
- **σ** = Volatility
- **dW** = Random shock (Brownian motion)

**Use**: Model random asset price movements.

---

### Put-Call Parity for Corporate Debt

```math
\min(V_T, F_1) = F_1 - \max(F_1 - V_T, 0)
```

**Interpretation**: Risky corporate bond = Risk-free bond - Put option

---

## Quick Reference Table

| Formula | Equation | Use Case |
|---------|----------|----------|
| **Present Value** | $\text{PV} = \frac{FV}{(1+r)^t}$ | Discount future cash flows |
| **Future Value** | $\text{FV} = PV \times (1+r)^t$ | Compound present value |
| **NPV** | $\text{NPV} = \sum \frac{CF_t}{(1+r)^t}$ | Evaluate projects |
| **Annuity PV** | $\text{PV} = \text{PMT} \times \frac{1-(1+r)^{-n}}{r}$ | Value equal payments |
| **Perpetuity PV** | $\text{PV} = \frac{\text{PMT}}{r}$ | Value infinite payments |
| **Growing Perpetuity** | $\text{PV} = \frac{\text{PMT}}{r-g}$ | Value growing infinite payments |
| **Gordon Model** | $P_0 = \frac{D_1}{r-g}$ | Value stocks |
| **HPR** | $\text{HPR} = \frac{P_1 - P_0}{P_0}$ | Calculate returns |

---

## Important Rules to Remember

1. **NPV Rule**: Accept projects with NPV > 0
2. **Mutually Exclusive**: Choose highest NPV
3. **Growing Formulas**: r must be > g
4. **Stock Valuation**: Use D₁ (next dividend), not D₀
5. **Compound Interest**: Interest on interest accelerates growth
6. **Discount Rate**: Higher rate → lower present value
7. **Time Horizon**: Longer period → greater compounding effect

---

## Common Mistakes to Avoid

### ❌ Don't
- Use D₀ instead of D₁ in Gordon model
- Assume r ≤ g in growing perpetuity formulas
- Ignore time value of money in multi-period analysis
- Add cash flows from different periods without discounting
- Confuse simple and compound interest

### ✅ Do
- Always discount future cash flows to present value
- Use appropriate discount rate for risk level
- Check that r > g for growing formulas
- Include opportunity costs in NPV calculations
- Consider all relevant cash flows

---


