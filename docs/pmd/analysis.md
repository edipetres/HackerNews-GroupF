# Static analysis with `PMD`

See the [Report](#report) below.

Even though `PMD` supports Javascript, it seems to be mainly written for Java. Unfortunately, I do not have any large Java projects and don't see myself using that language in the future either, but I still wanted to give it a try on a language I prefer and use the most, Javascript.

## Ecmascript rulesets

I only found 4 rulesets for Ecmascript. Since not all of them gave an output for our Hackernews project due to the small amount of backend code I also ran it on a different project. It is a web app for my work called Valuer Agents, but since it is a private repository I could only include the output of `PMD`.

### basic.xml

#### Hackernews

```
$ pmd -d /Users/edmondpetres/Cphbusiness/HackerNewsG7/server -R rulesets/ecmascript/basic.xml -f text

/Users/edmondpetres/Cphbusiness/HackerNewsG7/server/posts.js:6:	Avoid trailing commas in object or array literals
/Users/edmondpetres/Cphbusiness/HackerNewsG7/server/posts.js:76:	Avoid using global variables
/Users/edmondpetres/Cphbusiness/HackerNewsG7/server/posts/model.js:5:	Avoid trailing commas in object or array literals
/Users/edmondpetres/Cphbusiness/HackerNewsG7/server/posts/model.js:18:	Avoid trailing commas in object or array literals
/Users/edmondpetres/Cphbusiness/HackerNewsG7/server/posts/router.js:56:	Avoid using global variables
/Users/edmondpetres/Cphbusiness/HackerNewsG7/server/status.js:9:	Avoid using global variables
```

### braces.xml

#### Valuer Agents

```
$ pmd -d /Users/edmondpetres/Development/Valuer/valuer-agents/server -R rulesets/ecmascript/braces.xml -f text

/Users/edmondpetres/Development/Valuer/valuer-agents/server/helpers/mailHandler.js:78:	Avoid using if statements without curly braces
/Users/edmondpetres/Development/Valuer/valuer-agents/server/mailchimp.js:28:	Avoid using if statements without curly braces
/Users/edmondpetres/Development/Valuer/valuer-agents/server/profile.js:66:	Avoid using if statements without curly braces
/Users/edmondpetres/Development/Valuer/valuer-agents/server/settingsProxy.js:163:	Avoid using if statements without curly braces
/Users/edmondpetres/Development/Valuer/valuer-agents/server/settingsProxy.js:215:	Avoid using if statements without curly braces
/Users/edmondpetres/Development/Valuer/valuer-agents/server/userAuth.js:32:	Avoid using if statements without curly braces
/Users/edmondpetres/Development/Valuer/valuer-agents/server/valuerApi.js:49:	Avoid using if statements without curly braces
/Users/edmondpetres/Development/Valuer/valuer-agents/server/valuerApi.js:65:	Avoid using if statements without curly braces
/Users/edmondpetres/Development/Valuer/valuer-agents/server/valuerApi.js:121:	Avoid using if statements without curly braces
/Users/edmondpetres/Development/Valuer/valuer-agents/server/valuerApi.js:158:	Avoid using if statements without curly braces
```

### controversial.xml

```
No output
```

### unnecessary.xml

#### Hackernews

```
/Users/edmondpetres/Cphbusiness/HackerNewsG7/server/posts/controller.js:5:	Unnecessary block.
/Users/edmondpetres/Cphbusiness/HackerNewsG7/server/posts/controller.js:26:	Unnecessary block.
/Users/edmondpetres/Cphbusiness/HackerNewsG7/server/posts/controller.js:35:	Unnecessary block.
/Users/edmondpetres/Cphbusiness/HackerNewsG7/server/posts/repository.js:7:	Unnecessary block.
```

#### Valuer Agents

```
/Users/edmondpetres/Development/Valuer/valuer-agents/server/settingsProxy.js:98:	The else block is unnecessary
/Users/edmondpetres/Development/Valuer/valuer-agents/server/settingsProxy.js:209:	The else block is unnecessary
/Users/edmondpetres/Development/Valuer/valuer-agents/server/valuerApi.js:163:	Unnecessary block.
```

## Report

Using `PMD` for a Javascript project seemed overly complicated to me. This is considering that I already use `JSLint` for my projects which implements different styling guides (like [Airbnb](https://github.com/airbnb/javascript) or Google) and does compile time checking to find out if the code corresponds to the large libraries of coding standards.

On the other hand, I also briefly ran `PMD` on the provided `GraphQL` project and I can see for someone using Java it can be a useful tool to ensure the adherence to certain standards.