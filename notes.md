# NOTES

## TypeORM Commands

To run TypeORM commands like `migration:generate`, you need to either compile to js or use
ts-node like so:

```
./node_modules/.bin/ts-node ./node_modules/.bin/typeorm {cli-command}
```
