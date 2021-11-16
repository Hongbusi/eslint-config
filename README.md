# configs

ESLint config & StyleLint config & Prettier config for my personal projects.

## lerna publish

网络原因可能会失败，这时候需要回退 commit，删除对应 tag:

``` bash
git reset --hard HEAD^

git tag -d <tag-name>

lerna publish
```