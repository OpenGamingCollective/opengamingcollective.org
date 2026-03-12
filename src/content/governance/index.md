---
---

# Open Gaming Collective

## Mission

Open Gaming Collective (OGC) provides an informal working group for organizations and individuals interested in improving the open source gaming ecosystem. The mission is to provide a collaborative framework for upstream changes to the various gaming components that will benefit all projects.

## Scope

OGC focuses on the foundational layers of the Linux gaming stack. This includes, but is not limited to:

- Graphics & Display: Mesa, Vulkan extensions, and windowing protocols (Wayland).
- Hardware Enablement: Kernel drivers, firmware coordination, and peripheral support (HID).

This working group will own an organization that will host shared components, agreed upon by the owners, that all can use.

## Owners Agreement

### Upstream First

"Upstream First" is a rigorous technical policy. It means that any code produced or improved by OGC is intended to live in the original source project (e.g., the official Mesa repository) rather than being maintained as a permanent "patch" or "fork" within OGC.
- Reducing Technical Debt: Owners agree not to "hoard" features. Carrying local patches makes software harder to update over time. By pushing for changes to exist upstream, owners ensure the long-term health of the gaming stack.
- Strategic Advocacy: As the "Owner" role definition suggests, this involves Upstream Advocacy. Owners are agreeing to do the hard work of negotiating with upstream maintainers to get OGC’s improvements accepted into the main codebases.
- Sustainability: This commitment ensures that if OGC were to ever dissolve, the work wouldn't disappear; it would already be part of the foundational Linux ecosystem (Fedora, Arch, KDE, etc.).

### Document Upstream Work

The OGC has a commitment to ecosystem awareness and transparency. It ensures that OGC does not become an "island" that duplicates work already happening elsewhere.

- Tracking Issues: Owners will agree to create tracking issues in the OGC Organization that will map to the various upstreaming efforts for transparency and visibility for the group. Owners will agree to check the tracker before starting work and collaborate where necessary versus duplicating effort.
- Knowledge Sharing: Owners are agreeing to make their research public. This helps the community understand why a certain technical path was chosen based on the current state of upstream development.
- Accountability in Ownership: By documenting work, owners identify which organizations or individuals are leading specific efforts.

## Values

### Focus on the Gaming Experience
We want to provide the best in class gaming experience for projects that adopt our deliverables.

### Inclusive is better than exclusive
Broadly successful and useful technologies require different perspectives and skill sets, which can only be heard in a welcoming and respectful environment. Our community respects the time and effort put into a discussion. We honor discussion by carefully evaluating the work of our owners, members, and other contributors. By doing this, it helps realize our final goal of improving the upstream ecosystem.

### Evolution is better than stagnation
Openness to new ideas and studied technological evolution make us a stronger project.

### Transparency
We endeavour to utilize the latest in open source technology to ensure our users can verify the processes used to build our deliverables. We strive to educate our users by sharing as much data as we can.

### Bias for Action
We strive to prefer stability and correctness but recognize that we must act to solve problems quickly and efficiently.

## Governance

### Decision Making

Open Gaming Collective will operate using the Lazy Consensus Model. 

Paraphrased from the [Apache Community](https://community.apache.org/committers/decisionMaking.html):

>Lazy consensus means that you don’t need to get explicit approval to proceed, but you need to be prepared to listen if someone objects.

>Lazy consensus is achieved by stating your intent on a public email, and waiting an appropriate amount of time (usually 72 hours) for anyone to object. Silence indicates consent, and after that time has passed, you can assume that nobody objects, and proceed with your plan.

>Objections to the plan should be accompanied by a legitimate reason, and be open to discussing possible alternative approaches.

This model strikes a balance of getting things done and avoiding unnecessary discussion about a change.

### Conflict Resolution

The purpose of this section is to provide some strategies for how to deal with conflict when it inevitably arises.

- Identify the Objection: Someone raises a valid concern (e.g., a -1 vote with a detailed comment) instead of staying silent.
- Focus on Ideas, Not Identity: Frame disagreements around the ideas or implementation, not the person, to avoid defensiveness (e.g., "This approach has risks" vs. "You are wrong").
- Provide Justification: Objectors must provide legitimate reasons or alternative solutions, not just say "no".

### Ownership of Decisions

Open Gaming Collective is a group made up of owners. They are **all** responsible for decisions made when they have reached consensus. It is important that owners communicate with each other and help take ownership of issues as they arise from our decisions.

### Changes to Scope

The intention of this group is to keep the scope small and focused to allow us to focus on the mission. This does not mean that the scope is not able to be changed. Changes to the scope will require a change proposal to be written and to provide reasoning for why we must change the scope. 

The change proposal must be submitted to source control as an issue for review by existing owners using Lazy Consensus.

## Communication Channels

### Source Control Platform

The source control platform will be the primary place that technical and non-technical decisions regarding the OGC will take place.

This includes but is not limited to: 
- Tracking issues for Upstream Work
- Projects or patches that will exist until work is upstreamed

### Community Chat

Community Chat can be used as a way for us to communicate or work together on problems, but cannot be used as a way to make any official decisions regarding the OGC.

## Source Control Platform Role Definitions

This document outlines the distinctions between **Owners** and **Members** within the Open Gaming Collective Organization. The primary difference lies in the balance between **Strategic Management** (Owner) and **Technical Execution** (Member).

### 1. Owner (Organization Member)

An **Owner** is a maintainer within the source control platform. Their role is focused on the "why" and "should" of the organization, ensuring that every contribution aligns with the long-term mission and organizational health. They inherit all of the requirements and responsibilities that members have.

They represent a member project, and there will be only one or two representatives from each project at the Owner level.

**Defined by:** Official membership within the Open Gaming Collective organization.

#### Requirements
* **Organizational Alignment:** Deep understanding of the project mission and how it fits into the broader Linux gaming ecosystem.
* **Upstream Advocacy:** Ability to represent the organization in discussions with upstream projects (e.g., Fedora, Arch, KDE, etc.).
* **Sustainability Mindset:** Demonstrated interest in the project's long-term health beyond individual code fixes.
* **Community Leadership:** Willingness to mentor new contributors and guide potential Members.

#### Responsibilities and Privileges
* **Strategic Governance:** Authority to accept or reject proposed repositories for the group to track and changes to this agreement based on mission fit.
* **Organizational Management:** Handling administrative tasks, including labels, milestones, repository settings, and CI/CD secrets.
* **Conflict Resolution:** Assist in technical disputes or community disagreements.

### 2. Member (Repository-level Maintainer)

A **Member** is a trusted expert empowered to validate technical correctness. Their role is focused on the "how" and "if," ensuring that code is performant, bug-free, and maintainable.

They are maintainers within specific repositories in the organization, and there may be as many members from a project as is necessary.

**Defined by:** Write/Merge access to specific repositories, without being a formal member of the organization.

#### Requirements
* **Technical Mastery:** Expert-level knowledge of the specific components maintained by the organization.
* **Standards Consistency:** Upholding the project’s coding standards.
* **Responsiveness:** A commitment to providing timely, constructive feedback on Pull Requests to maintain velocity.
* **Technical Judgement:** Ability to identify subtle bugs, regressions, or performance bottlenecks in incoming code.

#### Responsibilities and Privileges
* **Technical Validation:** Authority to approve and merge code contributions that meet quality standards.
* **Quality Control:** Enforcing testing requirements and documentation standards.
* **Queue Management:** Actively reviewing assigned PRs to reduce "time-to-merge" for the community.
* **Mentorship:** Providing detailed technical feedback to help contributors improve their code quality.

### Role Comparison Summary

| Feature                | Owner                             | Member                                |
| :--------------------- | :-------------------------------- | :------------------------------------ |
| **Primary Focus**      | Strategy: "Should we build this?" | Execution: "Is this built correctly?" |
| **Status**             | Official Org Member               | External Contributor (Write Access)   |
| **Admin Rights**       | Manages repo settings & secrets   | No administrative overhead            |
| **Scope of Authority** | Organization-wide                 | Specific repositories or sub-systems  |

### Progression

- Becoming a Member: Regular contributors who demonstrate technical mastery and a consistent history of high-quality PRs may be nominated by any existing Owner or Member.
- Becoming an Owner: Members who show sustained interest in the project's strategic direction and organizational health can be invited to Membership by a majority vote of current Owners.

## Code of Conduct

### Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation, and any other immutable characteristics.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

### Our Standards

**Examples of behavior that contributes to a positive environment for our community include:**

- Demonstrating empathy and kindness toward other people.
- Being respectful of differing opinions, viewpoints, and experiences.
- Giving and gracefully accepting constructive feedback.
- Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience.
- Focusing on what is best not just for us as individuals, but for the whole community.

**Examples of unacceptable behavior include:**

- The use of sexualized language or imagery, and sexual attention or advances of any kind.
- Trolling, insulting or derogatory comments, and personal or political attacks.
- Public or private harassment.
- Publishing others' private information, such as physical or email addresses, without their explicit permission.
- Other conduct which could reasonably be considered inappropriate in a professional setting.

### Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.

### Scope

This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces.

Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at safety@opengamingcollective.org. All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the reporter of any incident.

### Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:

1. Correction
Community Impact: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.

Consequence: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.

2. Warning
Community Impact: A violation through a single incident or series of actions.

Consequence: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time.

This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.

3. Temporary Ban
Community Impact: A serious violation of community standards, including sustained inappropriate behavior.

Consequence: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period.

Violating these terms may lead to a permanent ban.

4. Permanent Ban
Community Impact: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward, or disparagement of, classes of individuals.

Consequence: A permanent ban from any sort of public interaction within the community.

### Attribution
This Code of Conduct is adapted from the Contributor Covenant, version 2.0.

Community Impact Guidelines were inspired by Mozilla's code of conduct enforcement ladder.

For answers to common questions about this code of conduct, see the FAQ. Translations are available here.
