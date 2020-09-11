# Matrices (Chapter 7)

Class: VCE Methods 1+2
Created: Sep 6, 2020 5:49 PM
Reviewed: No
Textbook: Cambridge Maths Methods 1&2
Type: Tutoring

# Matrix

$$\begin{bmatrix} a & b \\ c & d \end{bmatrix}$$

This is a matrix with dimensions 2 x 2.

Matrices have **inverses** and **determinants**.

## Identity matrix

An identity matrix has 1s along the diagonal.

$$I = \begin{bmatrix} 1&0&0&0\\0&1&0&0\\0&0&1&0\\0&0&0&1\end{bmatrix}$$

When a matrix is multiplied by an identity with the same dimensions, the matrix stays the same.

# Determinant

The determinant formula shows whether a matrix can have a inverse.

## Determinant formula for a 2 x 2 matrix

$$a = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$$

$$det(a) = ad - bc$$

# Inverse

The inverse of a matrix is another matrix which, when multiplied by the original matrix yields an identity matrix. Explained better below ($A^-1$ is the inverse matrix of A).

$$A * A^{-1} = I$$

## Matrix inversion formula

$$A = \begin{bmatrix} 3 & 2 \\ 1 & 6 \end{bmatrix}$$

$$A^{-1} = \frac{1}{ad-bc} * \begin{bmatrix} d&-b\\-c&a \end {bmatrix}$$

$$A^{-1} = \frac{1}{det(A)} * \begin{bmatrix} d&-b\\-c&a \end {bmatrix}$$