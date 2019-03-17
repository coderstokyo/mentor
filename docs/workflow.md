# Workflow

Each sprint defines a list of features need to implement and deliver.

## Development

When developers are implementing the feature. The version of application need to have the **postfix** "-canary.<number>".

**For example**:

- In the sprint 1. I mark the version of the application "1.0.0".
- Development: The version should be "1.0.0-canary.0". After fixing bugs, developers could increase version like "1.0.0-canary.1", "1.0.0-canary.2"

## Release

- After finishing features of the sprint and decide to release. We remove the **postfix** "canary".
- If there are some bugs of this release, we fix and increase the patch (without postfix "canary").

**For example**:

- After finishing all features of Sprint 1. I release with version "1.0.0".
- Then somebody finds the bug. I fix and increase patch version "1.0.1", "1.0.2", ...

## Release note & Tag

- After releasing features. Developers need to write a release note and create tag for the released version.
- Released note divides into 3 sections: Major, Minor and Patch.
