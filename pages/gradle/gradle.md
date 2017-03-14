---
title: Gralde
permalink: gradle.md
---
# Gradle

## Overview

Gradle is a build tool supporting scripts written in the Groovy language. Gradle follows a build-by-convention approach and is written using a DSL. The following is the list of key features:

1. Gradle is Groovy
2. Expressive build language and deep API
3. Integration with other build tools
4. Community-driven and company-backed
5. Effortless extendability
6. Scalable builds
7. Robust and powerful dependency management
8. Flexible conventions

Gradle scripts are commonly kept in a build.gradle file at the root of a project. The build.gradle file contains one or more tasks. You can view the tasks available using the command below:

	gradle -q tasks
	
As tasks can have dependencies, it's often better to run the command with the --all option:

	gradle -q tasks --all

## Project Folders

The project folders contain sample projects that leverage Gradle scripts. 

## CLI Options

-?, -h, --help

Shows a help message.

-a, --no-rebuild

Do not rebuild project dependencies.

--all

Shows additional detail in the task listing. See Section 4.7.2, �Listing tasks�.

-b, --build-file

Specifies the build file. See Section 4.5, �Selecting which build to execute�.

-c, --settings-file

Specifies the settings file.

--console

Specifies which type of console output to generate. Set to plain to generate plain text only. This option disables all color and other rich output in the console output. Set to auto (the default) to enable color and other rich output in the console output when the build process is attached to a console, or to generate plain text only when not attached to a console. Set to rich to enable color and other rich output in the console output, regardless of whether the build process is not attached to a console. When not attached to a console, the build output will use ANSI control characters to generate the rich output.

--continue

Continues task execution after a task failure.

--configure-on-demand (incubating)

Only relevant projects are configured in this build run. This means faster builds for large multi-projects. See the section called �Configuration on demand�.

-D, --system-prop

Sets a system property of the JVM, for example -Dmyprop=myvalue. See Section 12.2, �Gradle properties and system properties�.

-d, --debug

Log in debug mode (includes normal stacktrace). See Chapter 24, Logging.

-g, --gradle-user-home

Specifies the Gradle user home directory. The default is the .gradle directory in the user's home directory.

--gui

Launches the Gradle GUI. See Chapter 11, Using the Gradle Graphical User Interface. The Gradle GUI has been deprecated and will be removed in Gradle 4.0. Consider using an IDE with support for Gradle e.g. Eclipse, IntelliJ or NetBeans instead.

--include-build

Run the build as a composite, including the specified build. See Chapter 10, Composite builds.

-I, --init-script

Specifies an initialization script. See Chapter 44, Initialization Scripts.

-i, --info

Set log level to info. See Chapter 24, Logging.

-m, --dry-run

Runs the build with all task actions disabled. See Section 4.8, �Dry Run�.

--offline

Specifies that the build should operate without accessing network resources. See Section 25.9.2, �Command line options to override caching�.

-P, --project-prop

Sets a project property of the root project, for example -Pmyprop=myvalue. See Section 12.2, �Gradle properties and system properties�.

-p, --project-dir

Specifies the start directory for Gradle. Defaults to current directory. See Section 4.5, �Selecting which build to execute�.

--parallel (incubating)

Build projects in parallel. Gradle will attempt to determine the optimal number of executor threads to use. This option should only be used with decoupled projects (see Section 26.9, �Decoupled Projects�). For limitations of this option please see Section 26.8, �Parallel project execution�.

--max-workers (incubating)

Sets the maximum number of workers that Gradle may use. For example--max-workers=3. The default is the number of processors.

--profile

Profiles build execution time and generates a report in the buildDir/reports/profile directory. See Section 4.7.8, �Profiling a build�.

--project-cache-dir

Specifies the project-specific cache directory. Default value is .gradle in the root project directory.

-q, --quiet

Log errors only. See Chapter 24, Logging.

--recompile-scripts

Forces scripts to be recompiled, bypassing caching.

--refresh-dependencies

Refresh the state of dependencies. See Section 25.9.2, �Command line options to override caching�.

--rerun-tasks

Specifies that any task optimization is ignored.

-S, --full-stacktrace

Print out the full (very verbose) stacktrace for any exceptions. See Chapter 24, Logging.

-s, --stacktrace

Print out the stacktrace also for user exceptions (e.g. compile error). See Chapter 24, Logging.

--scan (incubating)

Creates a build scan. Gradle will fail the build if the build scan plugin has not been applied. For more information about build scans, please visit https://gradle.com.

--no-scan (incubating)

Disables the creation of a build scan. For more information about build scans, please visit https://gradle.com.

-t, --continuous (incubating)

Enables continuous building - Gradle will automatically re-run when changes are detected.

-u, --no-search-upward

Don't search in parent directories for a settings.gradle file.

-v, --version

Prints version info.

-x, --exclude-task

Specifies a task to be excluded from execution. See Section 4.2, �Excluding tasks�.

## Java Plug-in

The Java Plug-in is applied as follows:

	apply plugin: 'java'
	
* Adding the plug-in introduces a new task called "build"
* Running the command `gradle build` will run the following tasks in order by default: compileJava, processResources, classes, jar, assemble, compileTestJava, processTestResources, testClasses, test, check, build.
* The default output of `gradle build` for a project using the java plug-in will include the classes folder, a cache of dependencies, the libraries (such as the JAR file) and a temp folder.  

## Gradle Interfaces

### Project Interface

The Project interface is the main entry point of a Gradle build. The methods it contains include dependencies, configurations, files, tasks, etc. The Project interface also exposes properties, like name and description. 

### Task Interface

The Task interface provides methods that include task dependencies, actions, inputs, outputs, etc. It also contains various properties, such as description, task group and enabled. 

## Properties

Properties are a key part of configuring a Gradle script. Two common ways of defining properties are through "ext" or extra properties on the script and through a properties file. Some other ways to define properties are through the command line and environment values. 