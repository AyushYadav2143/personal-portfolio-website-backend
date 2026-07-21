# GeekPoints

## Quick Summary

GeekPoints is my flagship full-stack project.

It is a custom-built club management platform that automates contribution tracking, task allocation, member performance analysis, and real-time leaderboards for the GeeksforGeeks Student Chapter at Lovely Professional University.

If someone asks:

- Tell me about GeekPoints
- Explain GeekPoints
- What is GeekPoints?
- Show me your best project
- Tell me about your club management system

this document contains the answer.
# GeekPoints

## Overview

GeekPoints is a custom-built club management and contribution tracking platform developed exclusively for the GeeksforGeeks Student Chapter at Lovely Professional University (LPU). The platform was designed to create transparency in member contributions, automate repetitive administrative tasks, and motivate members through a fair point-based recognition system.

Unlike generic task management tools, GeekPoints was built specifically around the workflow of a student technical community. It provides a centralized platform for task allocation, contribution tracking, performance analytics, leaderboards, and member management.

The complete idea, architecture, backend, frontend, and database design were developed and implemented by Ayush Yadav.

---

# Motivation

Student organizations often struggle with:

- Manual contribution tracking
- Unfair recognition of members
- Spreadsheet-based task management
- No transparency in point allocation
- Difficulty measuring member performance
- Time-consuming administrative work

GeekPoints solves these problems by creating a centralized digital platform that automatically manages contributions and member growth.

---

# Problem Statement

Before GeekPoints:

- Contributions were tracked manually using Google Sheets.
- Points were assigned manually.
- Members had little visibility into their progress.
- Coordinators spent significant time updating records.
- No centralized dashboard existed.
- Performance evaluation lacked consistency.

GeekPoints transformed this entire workflow into an automated web application.

---

# Objectives

- Build a transparent contribution system.
- Motivate members through healthy competition.
- Reduce manual work for administrators.
- Improve task assignment.
- Track member growth.
- Increase engagement inside the chapter.
- Provide real-time statistics.
- Create a scalable internal management platform.

---

# Features

## Authentication

- Secure login
- Role-based access
- Admin panel
- Member dashboard

---

## Point System

Every contribution earns points.

Examples:

- Event volunteering
- Hosting sessions
- Winning competitions
- Organizing events
- Content creation
- Mentorship
- Development work

Points are automatically updated.

---

## Leaderboard

Real-time leaderboard showing:

- Overall Rank
- Total Points
- Member Position
- Growth

Leaderboard updates instantly after every approved contribution.

---

## Task Management

Admins can:

- Create tasks
- Assign tasks
- Define deadlines
- Define point values
- Approve submissions

Members can:

- View tasks
- Submit proof
- Track completion
- Earn points

---

## Contribution Tracking

Each contribution stores:

- Member
- Task
- Description
- Date
- Proof
- Status
- Points awarded

Everything remains permanently recorded.

---

## Dashboard

Personal dashboard includes:

- Current Rank
- Total Points
- Tasks Completed
- Pending Tasks
- Recent Activity
- Performance Graph

---

## Admin Dashboard

Admins can:

- Manage users
- Manage tasks
- Approve submissions
- Edit points
- View analytics
- Monitor activity

---

## Analytics

System tracks:

- Total Members
- Total Tasks
- Points Distribution
- Active Members
- Monthly Growth
- Engagement Statistics

---

## Notifications

Members receive updates when:

- Task assigned
- Submission approved
- Points updated
- Rank changes

---

# Technology Stack

Frontend

- React.js
- HTML5
- CSS3
- JavaScript
- Axios

Backend

- Node.js
- Express.js

Database

- PostgreSQL

Authentication

- JWT

Deployment

- Vercel
- Render

Version Control

- Git
- GitHub

---

# Architecture

Frontend

↓

REST API

↓

Express Backend

↓

PostgreSQL Database

---

# Database Design

Tables

## Users

- id
- name
- email
- role
- points

---

## Tasks

- id
- title
- description
- deadline
- point_value

---

## Submissions

- id
- user_id
- task_id
- status
- proof
- submitted_at

---

## Points

- id
- user_id
- amount
- reason

---

# API Highlights

Authentication

- Login
- Register
- JWT Verification

Users

- Get Members
- Update Profile
- Leaderboard

Tasks

- Create
- Edit
- Delete
- Complete

Points

- Award Points
- Deduct Points
- History

Admin

- Dashboard
- Analytics
- Reports

---

# Challenges Faced

## Fair Point Allocation

Different activities had different impact.

Solution:

Created configurable point values for every task.

---

## Transparency

Members questioned manual point allocation.

Solution:

Every point is traceable to a task.

---

## Scalability

Needed to support future chapter growth.

Solution:

Normalized database with modular backend.

---

## User Experience

Wanted a clean interface.

Solution:

Simple responsive dashboard.

---

# Impact

GeekPoints significantly improved chapter management.

Results:

- Transparent contribution tracking
- Reduced administrative workload
- Increased member motivation
- Better accountability
- Improved engagement
- Centralized data management

---

# Learning Outcomes

Building GeekPoints taught me:

- Full Stack Development
- REST API Design
- Authentication
- PostgreSQL
- Database Design
- State Management
- UI/UX Design
- Production Deployment
- Project Architecture
- Team Requirement Analysis

---

# Future Improvements

Planned features include:

- Mobile App
- QR Attendance
- Achievement Badges
- Weekly Challenges
- AI Insights
- Event Registration
- Certificate Generation
- Discord Integration
- Email Notifications
- Analytics Dashboard
- Dark Mode
- Multi-Chapter Support

---

# Frequently Asked Questions

## What is GeekPoints?

A contribution tracking and club management platform built exclusively for the GeeksforGeeks Student Chapter.

---

## Why was it built?

To replace manual spreadsheets and create a transparent recognition system.

---

## Who developed GeekPoints?

The platform was completely designed and developed by Ayush Yadav.

---

## Is it available publicly?

No.

It is an internal platform developed specifically for the GeeksforGeeks Student Chapter at LPU.

---

## What technologies were used?

React, Node.js, Express.js, PostgreSQL, JWT, Vercel, and Render.

---

## What problem does it solve?

It automates contribution tracking, task management, point allocation, and member recognition.

---

## How are points awarded?

Admins assign predefined point values to approved tasks and contributions.

---

## Can members track their progress?

Yes.

Each member has a personal dashboard with rankings, points, and activity history.

---

## What makes GeekPoints unique?

Unlike generic task management tools, GeekPoints is purpose-built for student technical communities, combining contribution tracking, transparent recognition, analytics, and performance management into a single platform.

---

# My Role

- Conceived the original idea
- Designed the complete system architecture
- Developed the frontend
- Built the backend APIs
- Designed the PostgreSQL database
- Implemented authentication
- Built the leaderboard logic
- Developed the admin dashboard
- Deployed the application
- Maintained and improved the platform

---

# Elevator Pitch

GeekPoints is a custom-built contribution management platform developed for the GeeksforGeeks Student Chapter at LPU. It replaces manual spreadsheets with an automated system for task management, transparent point allocation, real-time leaderboards, and performance analytics. The platform streamlines administrative workflows while motivating members through fair recognition and measurable growth.
