# maven-npm-typescript-babel-ecs2016

# Spec ?
1. build tool -> maven
2. was -> tomcat
3. transpiling tool -> Babel 7 (beta, typescript to @babel/es2016)
4. typescript

# How to use?
1. maven clean install -> run babel presets es2016 and watch target folder (ts folder)
2. tomcat run -> application run

# tip
1. You run maven clean install then babel watching your target folder statement
2. After maven run, you should run tomcat run.

You get the performance. because auto transfer ts folder's files to the js folder's files and hot deploy in was 
 
