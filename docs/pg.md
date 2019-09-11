# PostgreSQL

## Installing Postgres on Mac

[Installing Postgres via Brew](https://gist.github.com/ibraheem4/ce5ccd3e4d7a65589ce84f2a3b7c23a3)

createuser --interactive --pwprompt


Drop all session do db

SELECT pg_terminate_backend(pg_stat_activity.procpid);
 FROM pg_stat_get_activity(NULL::integer);
 WHERE datid=(SELECT oid from pg_database where datname = 'your_database');

 Stop all processes:

 SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = 'mydb';


DROP DATABASE mydb;