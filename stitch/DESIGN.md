# Design System: Star Lane Runner

**Stitch project:** 15511812296313167341
**Authority:** ProductSpec v2 plus browser-observed DesignInteractionGraph v2.

## Product screens
- Play root frame - Star Lane Runner (TARGET_PLAY_ROOT; source d710e502f875427caf1edd7265006141)

## Physical control slots
- CSLOT_START_ROUND_CP_START: Start round on SURF_CONTROLS_PANEL
- CSLOT_MOVE_LEFT_CP_LEFT: Move player to lane 0 on SURF_CONTROLS_PANEL
- CSLOT_MOVE_CENTER_CP_CENTER: Move player to lane 1 on SURF_CONTROLS_PANEL
- CSLOT_MOVE_RIGHT_CP_RIGHT: Move player to lane 2 on SURF_CONTROLS_PANEL
- CSLOT_COLLECT_STAR_CP_COLLECT: Collect the star on SURF_CONTROLS_PANEL
- CSLOT_OPEN_SETTINGS_CP_SETTINGS: Open settings on SURF_CONTROLS_PANEL
- CSLOT_OPEN_SETTINGS_CP_LEFT: Open settings on SURF_CONTROLS_PANEL
- CSLOT_OPEN_SETTINGS_CP_CENTER: Open settings on SURF_CONTROLS_PANEL
- CSLOT_OPEN_SETTINGS_CP_RIGHT: Open settings on SURF_CONTROLS_PANEL
- CSLOT_OPEN_SETTINGS_CP_COLLECT: Open settings on SURF_CONTROLS_PANEL
- CSLOT_RESUME_GAME_CP_RESUME: Resume game on SURF_SETTINGS_OVERLAY
- CSLOT_RESUME_GAME_CP_LEFT: Resume game on SURF_CONTROLS_PANEL
- CSLOT_RESUME_GAME_CP_CENTER: Resume game on SURF_CONTROLS_PANEL
- CSLOT_RESUME_GAME_CP_RIGHT: Resume game on SURF_CONTROLS_PANEL
- CSLOT_RESTART_ROUND_CP_RESTART: Restart round on SURF_CONTROLS_PANEL

## Implementation boundary
These files are accepted visual source, not executable application behavior. Every physical control is owned by its exact data-action and data-control-slot identity. Affected surfaces do not authorize additional controls. Routes, state transitions, persistence, reload behavior, and evidence predicates come from the sealed Product Build Packet, not from labels, inferred layout, or agent prose.

## Source policy
Only the selected response IDs in DESIGN_MANIFEST.json are canonical screens. STITCH_RENDERED_SEMANTICS_V2.json records the locked browser observation, STITCH_TARGET_CANDIDATE_SELECTION.json records exact qualification, and STITCH_RESPONSE_BINDINGS.json joins each target to the downloaded HTML and screenshot hashes. Unselected provider output is evidence only and cannot become implementation authority.
