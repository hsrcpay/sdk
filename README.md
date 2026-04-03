# hsrcpay SDK Workspace Template

This repository is a **language-agnostic SDK template** for a multi-language SaaS SDK strategy.

## Repository Strategy

- **Default:** monorepo-first layout for shared standards and coordinated releases.
- **Polyrepo-ready:** each language SDK under `sdks/` can be extracted to a standalone repository later.

## Structure

- `sdks/` language-specific SDK packages
- `shared/` cross-language contracts, specs, and test vectors
- `tooling/` generation and release pipeline placeholders
- `docs/` architecture and contribution guidance
- `examples/` per-language integration samples (placeholder only)

No runtime implementation code is included by design.
