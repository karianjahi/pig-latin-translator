# 🐷 Pig Latin Translator

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript)
![Regex](https://img.shields.io/badge/Concept-Regular%20Expressions-blue)
![String
Manipulation](https://img.shields.io/badge/Focus-String%20Transformation-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)
![Status](https://img.shields.io/badge/Project-Educational-orange)

------------------------------------------------------------------------

## ✨ Overview

This project implements a **Pig Latin Translator** using JavaScript and
regular expressions.

It demonstrates:

-   🧠 Pattern matching with regex\
-   🔍 Consonant cluster detection\
-   🔤 Vowel detection at word start\
-   🔁 String slicing and reconstruction\
-   ⚡ Clean conditional logic

------------------------------------------------------------------------

## 🐽 What is Pig Latin?

Pig Latin is a playful word transformation language with simple rules:

### 🅰 If a word starts with a vowel:

Add **"way"** to the end.

Example: eight → eightway

------------------------------------------------------------------------

### 🅱 If a word starts with a consonant or consonant cluster:

Move the consonant(s) to the end and add **"ay"**.

Examples: california → aliforniacay\
glove → oveglay\
paragraphs → aragraphspay\
schwartz → artzschway

------------------------------------------------------------------------

### 🅾 Edge Case Example:

rhythm → rhythmay

------------------------------------------------------------------------

## 🔍 How It Works (Conceptually)

The translator works in two stages:

1️⃣ Detect a consonant cluster at the beginning of the word.\
2️⃣ If found, move it to the end and append "ay".\
3️⃣ Otherwise, append "way" to vowel-starting words.

------------------------------------------------------------------------

## 🧠 Regex Concepts Demonstrated

  Concept    Purpose
  ---------- -------------------------------
  `^`        Anchor to beginning of string
  `[^...]`   Match non-vowel characters
  `+`        Match one or more characters
  `i`        Case-insensitive matching

------------------------------------------------------------------------

## 📦 Example Outputs

  Input        Output
  ------------ --------------
  california   aliforniacay
  paragraphs   aragraphspay
  glove        oveglay
  eight        eightway
  rhythm       rhythmay
  schwartz     artzschway

------------------------------------------------------------------------

## 🎯 Skills Practiced

-   Regular expressions\
-   String transformation\
-   Conditional logic\
-   Clean functional design

------------------------------------------------------------------------

## 🛠 Tech Stack

-   JavaScript (Vanilla)
-   Node.js compatible

------------------------------------------------------------------------

## 📄 License

MIT License

------------------------------------------------------------------------

## 👨‍💻 Author

Created as part of a JavaScript regex and algorithm mastery journey.