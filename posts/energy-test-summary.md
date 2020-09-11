---
title: Energy test summary sheet
description: This is a summary sheet for an upcoming test on energy and motion.
date: 2020-09-10
tags:
  - Physics
  - Energy
  - Momentum
layout: layouts/post.njk
image: https://unsplash.com/photos/5mZ_M06Fc9g/download?force=true&w=1920
---

## SI Units

[Copy of SI units for various measures](https://www.notion.so/a5e53f161acb493dacccc98359d5c66a)

# Essential Formulae

## Hooke's law

$$F = k * \Delta x$$

The restoring force of a spring is the spring constant times the extension of the spring.

## Elastic potential energy

$$U_e = \frac{1}{2}k\Delta x$$

Where k is the spring constant and $\Delta x$ is the extension.

## Kinetic energy

$$E_k = \frac{1}{2}mv^2$$

Kinetic energy is equal to half times the mass times the velocity squared.

## Total mechanical energy

Total mechanical energy is the kinetic energy plus the gravitational potential energy.

## Work

Work is the amount of work done by a force (not sure how to explain it simpler than that).

$$W = F * \Delta x$$

Work is equal to force times displacement. It is a measure of energy which means it is in joules. It can also be affected by the angle of the plane, this yields the following equation:

$$W = f*\Delta x *\cos \theta\degree$$

Work is also a measure of the change in energy acting on an object before and after an action. Work doesn't apply to an entire system.

$$W = \Delta E$$

$$W = E_\text{final} - E_\text{initial}$$

Negative work is also possible, if the final energy is lesser than the initial energy.

## Gravitational energy

$$E_g = m*g*\Delta h$$

Gravitational potential energy is equal to mass times the acceleration of gravity times the change in height.

## SUVAT equations

### pronumerals

- v = final velocity
- u = initial velocity
- a = acceleration
- s = displacement
- x = displacement
- t = time

### equation 1

$$v = u + at$$

### equation 2

$$\Delta x = t\frac{u+v}{2}$$

### equation 3

$$\Delta x = ut + \frac{1}{2}at^2$$

### equation 4

$$v^2 = 2ax + u^2$$

## Momentum

$$p = mv$$

## Collisions

### Equation 1

$$m_1u_1+m_2u_2 = v(m_1+m_2)$$

### Equation 2

$$m_1u_1+m_2u_2 = m_1v_1+m_2v_2$$

### Impulse

Impulse is the change in momentum.

$$I = \Delta p$$

### Conservation of momentum

Conservation of momentum means the the total amount of momentum in a closed system is the same before and after.

$$P_\text{before} = P_\text{after}$$

# Worked practice questions

## Gravitational energy over hills

Equate kinetic energy and gravitational energy.

$E_g = m*g*\Delta h$

Without friction, gravity depends on the change in height. The hills will give back the same amount of energy as it took to get over them. We only need to figure out the maximum height that 2.2J of energy can take the toy car. So, $2.2 = 0.5 * 9.8 * \Delta h$, $\Delta h = 2.2/0.5/9.8$. Therefore $\Delta h = 0.448979592$

## Bouncing on a trampoline

The change in energy is $450 - 250 = 170$ joules. Using the equation from before we can do $\Delta h = 170/38/9.8$ which is $0.456498389$.

## Swinging on a bar

$E_k = \frac{1}{2}mv^2$ is the formula for kinetic energy. Substitute this formula inside $E_g = m*g*\Delta h$ so then you get $\frac{1}{2}mv^2 = mg\Delta h$, remove mass from both sides to get $\frac{v^2}{2} = g\Delta h$. Isolate velocity with $v = \sqrt{2g\Delta h}$. Now we can input the values with $v = \sqrt{2 * 9.8 * 2.66}$. Therefore $v = 7.2205263$.

## Golf balls

### part a)

$E_k = \frac{1}{2}mv^2$ is the formula for kinetic energy. This gives the ball a kinetic energy of $0.5 * 0.049 * 43.2^2$ which comes out to $45.72288$. The kinetic energy changes as the golf ball goes up, so we need to find how much energy it takes to move a gold ball 31 meters in the air. The formula for this is $E_k = m*g*\Delta h$, so we substitute the appropriate values and get $E_k = 0.049 * 9.8 * 31$, which is  $14.8862$. Then we get the energy by doing $45.72288 - 14.8862$ which comes out to $30.83668$  joules.

### part b)

We can use the same formula except replace 31 with 23.91. We get $11.481582$ as the amount of kinetic energy required to move the ball up and then subtract this from $45.72288$ which gives us $34.241298$. We need speed here so substitute this value into the kinetic energy equation. This gives us $37.3845423$.

## truck on a highway

We use the 4th SUVAT equation for this. $v^2 = 2ax + u^2$. 

The total force acting on the truck is split into 2 parts.

1. The amount of force that slows down the truck (laterally)
2. The amount of force that goes into the ground.

How do we find the proportions of each of these parts? (from 0% to 100%)? We use the angle of the forces. Force #1 is angled at 20 degrees from the horizontal. That means that force of gravity is reduced on force #1.

Think about it like this:

- If the truck was facing straight up into the sky (90 degrees from the ground) then the force would be 9.8 m/s.
- But the truck is actually 20 degrees from the ground.
- So the force is a bit less.

We can find the proportion using the sine function.

When theta is 90 degrees, sin(theta) will be 1. 100% of the force will be lateral.

When theta is 0 degrees, sin(theta) will be 0. 0% of the force will be lateral.

Therefore we get $v^2 = 2 * sin(20\deg)*9.8*130$. $v = 29.5206254$.

## Going down a waterslide

First we will find the displacement between the start of the slide and the end.

We can use the second SUVAT equation for this, $x = t\frac{u+v}{2}$. We can make $u = 0$ because the velocity at the start of the slide is 0 m/s. To get the final velocity, we can divide 5 meters by 0.348 seconds which gives us a speed. Then, to get the time, we divide this speed by 9.8 to get the number of seconds it took to reach it. We now have all the values to calculate displacement.

But, to get the height H we also need the height between the slide and the water. At an acceleration of 9.8 m/s, an initial velocity of 0 and a time of 0.348s we can calculate the displacement using $ut + \frac{1}{2}at^2$. This gives us a value of 0.5934096 which we can add to the result from the first bit to get H.

## The particle that goes straight up

We don't have a particle mass in this one, but that's okay because we are going to do $E_k = E_g$ where we can cancel mass. The two equations we get are $\frac{v^2}{2} = g\Delta h$. It's then easy to substitute everything to solve for stuff.

## The spring

$$W = Fx$$

Work (measured in joules) is equal to force (newtons) times displacement (metres).

$$U_e = \frac{1}{2}kx^2$$

Where $k$ is the spring constant and $x$ is the compression or extension of the spring.

### Part a)

The extension of spring is 3m. We don't want the elastic potential energy thought, we want the force, which we can get by rearranging the equation. This is because the spring constant is really an average of force over mass. We can multiple the spring constant 44 by 3 to get the force which is $132$N. Then we get the work using $W = 132 * 2$ which gives us 264 J.

## Another spring

We can equate $F = mg$ with Hooke's law to get the following:

$$mg = -k*\Delta x$$

This allows us to simplify 

## Bullets (wrong - don't use)

> A rifle fires a 3.86 x 10-2-kg pellet straight upward, because the pellet rests on a compressed spring that is released when the trigger is pulled. The spring has a negligible mass and is compressed by 7.45 x 10-2 m from its unstrained length. The pellet rises to a maximum height of 5.37 m above its position on the compressed spring. Ignoring air resistance, determine the spring constant.

Basically here we have to calculate the spring constant. First let us find how much force it will take for a bullet to be propelled 5.37 m in the air. This can be done using the gravitational energy formula, which is $E_g = m*g*\Delta h$. We substitute in the values using $E_g = 0.0386*9.8*5.37$. This gives us a value of $2.0313636$. 

Elastic energy is given using the formula $U_e = \frac{1}{2}k\Delta x$. We substitute all the values we know which gives us $2.0313636 = 0.5 * k * 0.0745$. We then isolate k with $k = \frac{2.0313636}{0.5 * 0.0745}$ which gives us a spring constant of $54.533251$.