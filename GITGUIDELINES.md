# Simple Git Guideline
This document serves as a short introduction/recap document - if you know git ignore this. 
## Basic Commands
When you have chosen to use git here are some commands that might come in handy. 
I will walk through them one by, explaining simple ways of how to use them.

Lets say that you are browsering github.com when suddenly a reposity appears, maybie you want to contribute! 
but order for you to contribute; you will have to download it first. So what do you do? you use git glone ...!     
  git clone <url>
Assuming that you wanted to contribute and you downloaded the repository, you can now browser files change them or 
whatever! Here is where git gets very clever, It uses something called branches. Using git checkout you can explore the
different branches or create new ones. In the begin name all branches feature/<the name of the feature> if it's a feature and 
fix/feature/<the name of the fix> if you are fixing a feature that already has been `merged` - when two branches are `merged` they are concatenated.
There are allot of other using the branches for example git-flow, fast-git, etc. thease are more complex.       
  git checkout -b <branch>
When you made some changes and you are satisfied you simply add your files using the git add. Do not use `git add *` it does add all files !!
  git add <file>
In the same way you can regret by typing git reset. 
  git reset <file>
You can always do a git status to get a overview of added files, or a git diff that shows the changes you have made.
  git status
When you feel like you are done type `git commit`. what this does is that it adds a lable to your changes.
  git commit -m "message"

Finally you type `git push origin` to push your changes to its current branch on github.
I hope that you have understood.. 
here is a link. 
https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches

## Our Project Specific Guidelines

- Do not push your changes to the master branch, do a request!.
- Name all the branches with a prefix of either "feature\" or "fix\".
- CamelCalse or whatever!
- Begin alla commits with a present tense verb, or whatever!.
- Make as many commits as possible it will look good on your Github statistics. 

