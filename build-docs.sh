
GIT=$(git rev-parse HEAD)
rm -rf ./dist/lucix-docs
git clone $(pwd)/.git -b docs ./dist/lucix-docs
cp .git/config ./dist/lucix-docs/.git/
(
  cd ./dist/lucix-docs &&
  git config advice.addIgnoredFile false &&
  git pull origin docs &&
  git rm -rf docs
)
mkdir -p dist/lucix-docs/docs
npx typedoc --out dist/lucix-docs/docs  src/ledger.ts

cd ./dist/lucix-docs
git add docs
if [ -z $GITHUB_REF ]
then
  git status --porcelain
  if [ $? = 0 ]
  then
    git commit -am "build from ${GIT} [skip ci]"
    git push origin docs
  fi
else
  git status
fi

