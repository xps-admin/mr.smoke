# Sandbox Control System

Purpose: safe build, test, and review layer for the storefront workflow before any production implementation.

Rules:
- Branch work only.
- Preview deployment only.
- No production publish.
- No secrets in files.
- No live commerce changes.
- All critical actions require approval and log evidence.

Core loops:
1. Intake: capture request, source, owner, and intended output.
2. Build: implement in isolated preview files.
3. Test: run local and preview checks.
4. Log: record result, blocker, workaround, and next action.
5. Promote: only move forward after approval.

Folders:
- `SANDBOX/control`: operating rules and status files.
- `SANDBOX/data`: safe sample data and schemas.
- `SANDBOX/prompts`: copy/paste operator prompts.
- `SANDBOX/reports`: generated review notes.
- `apps/preview`: client-facing visual preview app.
- `docs`: human-readable workflow documentation.
