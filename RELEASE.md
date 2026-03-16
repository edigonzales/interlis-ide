# Product release runbook

Use this runbook when you want to publish a new INTERLIS IDE release without changing the Eclipse Theia base, for example `0.0.8 -> 0.0.9`.

If you need to upgrade the vendor-upstream base first, follow [THEIA_UPGRADE.md](THEIA_UPGRADE.md) before starting a product release.

## Preconditions

- You are starting from `origin/master`.
- The working tree is clean.
- The target tag does not already exist.
- Node.js `>=20` and Yarn Classic are available.

Example target:

```sh
export RELEASE_VERSION=0.0.9
export RELEASE_TAG=v0.0.9
export RELEASE_BRANCH=codex/release-${RELEASE_VERSION}
```

## 1. Create the release branch

```sh
git fetch origin --tags
git switch master
git pull --ff-only origin master
git tag --list "${RELEASE_TAG}"
git switch -c "${RELEASE_BRANCH}"
```

`git tag --list "${RELEASE_TAG}"` must print nothing before you continue.

## 2. Update the product version

Update the root package version:

```sh
yarn version --no-git-tag-version --new-version "${RELEASE_VERSION}"
```

Update all workspace package versions to the same product version:

```sh
yarn lerna version "${RELEASE_VERSION}" --exact --no-push --no-git-tag-version --yes
```

At this point the product version is aligned across the repo. Do not use `yarn update:theia` for a normal product release.

## 3. Apply release-specific product changes

Typical examples:

- update the bundled INTERLIS plugin version in the root `package.json`
- adjust branding text, links, or release notes
- include small product fixes that should ship with the release

If you touch bundled plugins, refresh them before testing:

```sh
yarn download:plugins
```

## 4. Verify the release branch

Run the checks in this order:

```sh
yarn
yarn lint
yarn build:dev
yarn download:plugins
yarn electron package:preview
yarn electron test
yarn electron package:prod
yarn verify:release-version --ref "${RELEASE_TAG}"
```

This proves that:

- the workspace installs cleanly
- TypeScript and packaging changes still build
- the bundled plugins can be downloaded
- the packaged Electron app still passes the smoke tests
- a production release bundle can be assembled locally

## 5. Commit and open the PR

```sh
git status
git commit -am "Prepare INTERLIS IDE ${RELEASE_VERSION}"
git push -u origin "${RELEASE_BRANCH}"
```

Open a PR against `master`. In the PR description, list:

- the new product version
- any bundled plugin changes
- the exact verification commands you ran

## 6. Merge and create the release tag

After the PR is merged:

```sh
git fetch origin --tags
git switch master
git pull --ff-only origin master
git show origin/master:package.json | node -p "JSON.parse(require('fs').readFileSync(0, 'utf8')).version"
git show origin/master:applications/electron/package.json | node -p "JSON.parse(require('fs').readFileSync(0, 'utf8')).version"
yarn verify:release-version --ref "${RELEASE_TAG}" --git-ref origin/master
git tag -a "${RELEASE_TAG}" origin/master -m "INTERLIS IDE ${RELEASE_VERSION}"
git show "${RELEASE_TAG}^{}":package.json | node -p "JSON.parse(require('fs').readFileSync(0, 'utf8')).version"
git show "${RELEASE_TAG}^{}":applications/electron/package.json | node -p "JSON.parse(require('fs').readFileSync(0, 'utf8')).version"
yarn verify:release-version --ref "${RELEASE_TAG}" --git-ref "${RELEASE_TAG}^{}"
git push origin "${RELEASE_TAG}"
```

If either `git show` or `yarn verify:release-version` reports anything other than `${RELEASE_VERSION}`, stop and do not push the tag. This is the guardrail against accidentally tagging an older local commit such as `0.0.7`.

## 7. Verify the GitHub release

Pushing `v0.0.X` triggers [.github/workflows/build.yml](.github/workflows/build.yml), which creates the GitHub Release automatically.

Merging a PR into `master` does not create a stable GitHub Release. Pull requests and `master` pushes still run build, test, and packaging jobs, but only a `v*` tag creates the stable release entry and assets.

Check the workflow and the resulting release for:

- successful build jobs on all configured platforms
- generated release notes
- expected artifacts such as `.zip`, `.dmg`, `.exe`, `.deb`, `.AppImage`, and `latest-mac.yml`
- correct `latest` marker on GitHub so the stable updater continues to work

## Optional: build the `next` preview manually

The `next` preview channel is separate from the stable release flow. It does not run on a schedule anymore and does not publish a stable release.

If you explicitly want a preview build against the `electron-next` application, start [.github/workflows/build-next-release.yml](.github/workflows/build-next-release.yml) manually from the GitHub Actions UI. That workflow publishes a `next` pre-release for ad hoc testing only.

If the release also changed the public docs under `docs/**`, the docs deployment workflow will run separately after the merge to `master`.
