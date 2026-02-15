# Knowell Architecture

## Overview
Knowell is a web-based, privacy-first journal for recording what you’ve learned, with an option to share your entries with the community. Its vision is to be a safe space where people can log their knowledge privately or publicly. Its purpose is to provide a centralized platform for storing what you’ve learned, allowing you to revisit it later or share to the world.

## Main Parts
- Editor (core domain, handles content creation and formatting)
- UI Components (buttons, layout, toolbar)
- Pages & Routing (entry pages, public profiles, dashboard)
- State Management (editor state, user session, app settings)
- Content Storage (local storage or database, handles privacy)
- User Profile & Authentication (login, customizable profile, public/private entries)

## Data Flow 
1. User types → Editor state updates
2. Auto-save system triggers after short delay
3. UI updates subtly show “Saved”
4. If entry is public, backend sync occurs asynchronously

## Key Decisions
- Editor library: TipTap
  Reason: Supports structured content and extensibility
  Trade-off: Higher complexity compared to basic text input

- Content storage format: JSON
  Reason: Allows rich formatting and block-based content
  Trade-off: Less human-readable than Markdown

- Privacy-first design
  Reason: Users’ personal learning should remain safe
  Trade-off: Slightly more complex backend logic for public/private entries

- Use shadcn for faster build of components

## v1 Expectations
The v1 version of Knowell focuses on delivering the essential functionality while keeping the architecture simple and extensible:

- Rich text editor is fully functional, supporting formatting and content structure.
- Users can Save, Edit, and Delete entries.
- Dark/Light theme toggle works consistently across the app.
- Users can log in and personalize their profiles.
- Entries are stored in Supabase, supporting future syncing and public sharing.
