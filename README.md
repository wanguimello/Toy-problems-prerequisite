# Student Grade Generator, Speed Detector, and Net Salary Calculator

## Introduction
This project has three distinct but useful applications:
1. **Student Grade Generator**: A tool to determine student grades based on their marks.
2. **Speed Detector**: A utility to monitor car speeds and assign points or suspend licenses.
3. **Net Salary Calculator**: A tool to compute the net salary of an employee based on various deductions.

Each application aims to simplify everyday tasks for users and provide accurate and reliable results.

## User Instructions

### Student Grade Generator
1. Input student marks (between 0 and 100).
2. The application will output the corresponding grade:
   - A: Marks > 79
   - B: Marks between 60 and 79
   - C: Marks between 49 and 59
   - D: Marks between 40 and 49
   - E: Marks < 40

### Speed Detector
1. Input the speed of the car.
2. The application will:
   - Print "Ok" if the speed is less than 70.
   - Calculate points for every 5 km/s above 70.
   - Print "Points: X" where X is the number of  points.
   - Print "License suspended" if points exceed 12.

### Net Salary Calculator
1. Input the basic salary and benefits.
2. The application will compute:
   - Gross salary
   - Various deductions (taxes, NHIF, NSSF)
   - Net salary (Gross salary - Total deductions)
3. The net salary will be displayed.

## Developer Instructions

### How to Contribute

1. **Fork the Repository**: Click on the fork button at the top right corner of this page to create a copy of this repository under your account.

2. **Clone the Repository**: 
   ```sh
   git clone https://github.com/your-username/your-repository-name.git
   ```

3. **Create a Branch**: 
   ```sh
   git checkout -b feature-branch
   ```

4. **Make Your Changes**: Implement the necessary features or fixes.

5. **Commit Your Changes**: 
   ```sh
   git commit -m "Your descriptive commit message"
   ```

6. **Push to Your Fork**: 
   ```sh
   git push origin feature-branch
   ```

7. **Open a Pull Request**: Navigate to the original repository and click on the "New Pull Request" button to submit your changes for review.

### Contributor Expectations

- **Code Quality**: Ensure your code is well-documented, clean, and follows the project's coding standards.
- **Testing**: Test your code thoroughly before submitting. Ensure that all existing tests pass and add new tests for any new features.
- **Communication**: Provide clear and detailed descriptions of your changes. Be responsive to any questions or feedback during the review process.
- **Respect**: Be respectful and considerate of other contributors and maintainers. Constructive feedback is always appreciated.

Thank you for contributing to the Student Grade Generator, Speed Detector, and Net Salary Calculator project! Your efforts help improve the tools for all users.