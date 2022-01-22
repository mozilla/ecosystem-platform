---
title: Connecting to a local MySQL DB
---

FxA has several databases, for example `fxa`, `fxa_profile` and `pushbox`. Sometimes changes need to be made to a database, or it is helpful to read local data for development.

**Prerequisites**

- FxA running locally
- Docker
- [mysql CLI](https://dev.mysql.com/doc/refman/en/mysql.html)
  - If using the `mysql-client` option below, this can be installed via Homebrew with `brew install mysql-client`.

**Steps**

Execute an interactive shell on the MySQL DB container and start the MySQL shell:

```shell
yarn mysql
```

OR

Start the MySQL shell through the MySQL client:

```shell
mysql -uroot --host=127.0.0.1 --port=3306
```

Note: `mysql` is located in the `mysql-client` installation directory, e.g. at `/usr/local/opt/mysql-client/bin/mysql`.
