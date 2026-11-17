// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play root frame - Star Lane Runner
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayRootFrameStarLaneRunnerActionId = "resume-game-1" | "move-player-to-lane-0-2" | "move-player-to-lane-1-3" | "move-player-to-lane-2-4" | "start-round-5" | "collect-the-star-6" | "restart-round-7" | "open-settings-8" | "open-settings-left-9" | "open-settings-center-10" | "open-settings-right-11" | "open-settings-collect-12" | "resume-game-lane-0-13" | "resume-game-lane-1-14" | "resume-game-lane-2-15";

export interface PlayRootFrameStarLaneRunnerProps {
  actions?: {
    "resume-game-1"?: () => void;
    "move-player-to-lane-0-2"?: () => void;
    "move-player-to-lane-1-3"?: () => void;
    "move-player-to-lane-2-4"?: () => void;
    "start-round-5"?: () => void;
    "collect-the-star-6"?: () => void;
    "restart-round-7"?: () => void;
    "open-settings-8"?: () => void;
    "open-settings-left-9"?: () => void;
    "open-settings-center-10"?: () => void;
    "open-settings-right-11"?: () => void;
    "open-settings-collect-12"?: () => void;
    "resume-game-lane-0-13"?: () => void;
    "resume-game-lane-1-14"?: () => void;
    "resume-game-lane-2-15"?: () => void;
  };

}

export type PlayRootFrameStarLaneRunnerActionCallbacks = NonNullable<PlayRootFrameStarLaneRunnerProps["actions"]>;

export function PlayRootFrameStarLaneRunner({ actions }: PlayRootFrameStarLaneRunnerProps) {
  return (
    <>
      {/* Root Surface: SURF_PLAY_ROOT */}
        <div data-surface-id="SURF_PLAY_ROOT" className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 p-6" data-setfarm-element-ref="E000001">
          
          {/* Top Header / Title area */}
          <header className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-200 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <svg className="w-6 h-6 text-slate-950 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white">Star Lane Runner</h1>
                <p className="text-xs text-slate-400">Three-lane orbital collection simulator</p>
              </div>
            </div>
            <div className="text-xs text-slate-400 font-mono bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              System Status: Nominal
            </div>
          </header>
      
          {/* Main Workspace Layout */}
          <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            
            {/* Center Stage: SURF_GAME_SCENE (Game scene) */}
            <section data-surface-id="SURF_GAME_SCENE" className="lg:col-span-8 flex flex-col bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md shadow-2xl" data-setfarm-element-ref="E000002" data-observable-refs="OBS_COLLECT_STAR_O_COLLECT_MESSAGE OBS_OPEN_SETTINGS_O_SETTINGS_SCENE">
              <div className="flex items-center justify-between mb-4 z-10">
                <div className="flex items-center space-x-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-sm font-semibold text-slate-200 tracking-wide uppercase">Orbital Vector Field</span>
                </div>
                <div className="text-xs font-mono text-amber-300/90 bg-amber-950/40 border border-amber-800/40 px-3 py-1 rounded-full">
                  Star collected
                </div>
              </div>
      
              {/* 3 Lanes visual presentation */}
              <div className="relative flex-1 min-h-[380px] rounded-xl border border-slate-800 bg-slate-950/60 p-4 grid grid-cols-3 gap-3 overflow-hidden">
                {/* Lane 0 */}
                <div className="relative border-r border-dashed border-slate-800/70 flex flex-col items-center justify-end pb-8">
                  <div className="absolute top-3 text-[11px] font-mono text-slate-500 uppercase">Lane 0</div>
                </div>
      
                {/* Lane 1 (Center with Star and Ship) */}
                <div className="relative border-r border-dashed border-slate-800/70 flex flex-col items-center justify-between py-6">
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Lane 1</div>
                  
                  {/* Collectible Star Asset with accessibility role="img" aria-label="Star" */}
                  <div className="relative group my-auto flex flex-col items-center">
                    <img alt="Star" className="w-16 h-16 drop-shadow-[0_0_20px_rgba(250,204,21,0.7)] animate-bounce" data-setfarm-element-ref="E000003" role="img" aria-label="Star" data-observable-refs="OBS_COLLECT_STAR_O_COLLECT_STAR_HIDDEN" />
                    <span className="text-[10px] font-mono text-yellow-400 mt-2 bg-yellow-950/50 px-2 py-0.5 rounded border border-yellow-700/50">Target Lock</span>
                  </div>
      
                  {/* Runner Ship */}
                  <div className="flex flex-col items-center mb-2">
                    <div className="w-12 h-14 bg-gradient-to-t from-cyan-600 to-indigo-500 rounded-t-xl rounded-b flex items-center justify-center shadow-lg shadow-cyan-500/30 border border-cyan-400/40">
                      <div className="w-2 h-6 bg-cyan-200 rounded-full"></div>
                    </div>
                    <div className="w-6 h-2 bg-cyan-400/60 rounded-full blur-[2px] mt-1"></div>
                  </div>
                </div>
      
                {/* Lane 2 */}
                <div className="relative flex flex-col items-center justify-end pb-8">
                  <div className="absolute top-3 text-[11px] font-mono text-slate-500 uppercase">Lane 2</div>
                </div>
              </div>
            </section>
      
            {/* Right Column: Status & Overlays */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              
              {/* Status Surface: SURF_STATUS_PANEL */}
              <section data-surface-id="SURF_STATUS_PANEL" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between" data-setfarm-element-ref="E000004" data-observable-refs="OBS_COLLECT_STAR_O_COLLECT_HIGH_SCORE OBS_COLLECT_STAR_O_COLLECT_SCORE OBS_MOVE_CENTER_O_CENTER_LANE OBS_MOVE_LEFT_O_LEFT_LANE OBS_MOVE_RIGHT_O_RIGHT_LANE OBS_OPEN_SETTINGS_O_SETTINGS_PHASE OBS_RESTART_ROUND_O_RESTART_HIGH_SCORE OBS_RESTART_ROUND_O_RESTART_PHASE OBS_RESTART_ROUND_O_RESTART_SCORE OBS_RESUME_GAME_O_RESUME_PHASE OBS_START_ROUND_O_START_PHASE">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">Flight Telemetry</h2>
                    <span className="text-xs font-mono text-cyan-400">SYNC ACTIVE</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">Score</span>
                      <span className="text-2xl font-black font-mono text-white mt-1 block">Score: 0</span>
                      <span className="text-[10px] text-slate-500 mt-1 block">Session Star Units</span>
                    </div>
                    <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">Best Record</span>
                      <span className="text-2xl font-black font-mono text-amber-400 mt-1 block">High score: 0</span>
                      <span className="text-[10px] text-slate-500 mt-1 block">All-time High score: 1</span>
                    </div>
                  </div>
      
                  <div className="mt-4 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Position Vector:</span>
                      <span className="font-mono font-semibold text-cyan-300">Lane 1</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Lane Registry:</span>
                      <span className="font-mono text-slate-400">Lane 0 • Lane 1 • Lane 2</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Flight Mode:</span>
                      <span className="font-mono font-semibold text-emerald-400">Ready</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-800/60">
                      <span>Phase Observables:</span>
                      <span className="font-mono text-[11px] text-slate-400">Playing • Paused</span>
                    </div>
                  </div>
                </div>
              </section>
      
              {/* Settings Surface: SURF_SETTINGS_OVERLAY (Kept visible for contract completeness) */}
              <section data-surface-id="SURF_SETTINGS_OVERLAY" className="bg-slate-900/90 border border-indigo-900/60 rounded-2xl p-6 backdrop-blur-md shadow-xl relative" data-setfarm-element-ref="E000005" data-observable-refs="OBS_OPEN_SETTINGS_O_SETTINGS_OVERLAY OBS_RESUME_GAME_O_RESUME_OVERLAY">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                    </svg>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-300">Settings Overlay</h2>
                  </div>
                  <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">Pause Modal Active</span>
                </div>
                
                <p className="text-xs text-slate-400 mb-4">Flight systems suspended while in configuration view.</p>
                
                {/* Control Slot: CSLOT_RESUME_GAME_CP_RESUME */}
                <button data-action="ACT_RESUME_GAME" data-control-slot="CSLOT_RESUME_GAME_CP_RESUME" type="button" className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs tracking-wider uppercase shadow-md shadow-indigo-600/30 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400" data-setfarm-element-ref="E000006" data-action-id="resume-game-1" onClick={actions?.["resume-game-1"]}>
                  Resume game
                </button>
              </section>
      
            </div>
          </main>
      
          {/* Bottom Controls Area: SURF_CONTROLS_PANEL */}
          <footer data-surface-id="SURF_CONTROLS_PANEL" className="mt-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-2xl" data-setfarm-element-ref="E000007">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-2">
                <span>Command &amp; Navigation Console</span>
              </h2>
              <span className="text-xs text-slate-500 font-mono">14 SLOTS MOUNTED</span>
            </div>
      
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Navigation Section */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex flex-col space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Lane Positioning</span>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {/* CSLOT_MOVE_LEFT_CP_LEFT */}
                  <button data-action="ACT_MOVE_LEFT" data-control-slot="CSLOT_MOVE_LEFT_CP_LEFT" type="button" className="py-2 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition" data-setfarm-element-ref="E000008" data-observable-refs="OBS_MOVE_LEFT_O_LEFT_BUTTON" data-action-id="move-player-to-lane-0-2" onClick={actions?.["move-player-to-lane-0-2"]}>
                    Move player to lane 0
                  </button>
                  {/* CSLOT_MOVE_CENTER_CP_CENTER */}
                  <button data-action="ACT_MOVE_CENTER" data-control-slot="CSLOT_MOVE_CENTER_CP_CENTER" type="button" className="py-2 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition" data-setfarm-element-ref="E000009" data-observable-refs="OBS_MOVE_CENTER_O_CENTER_BUTTON" data-action-id="move-player-to-lane-1-3" onClick={actions?.["move-player-to-lane-1-3"]}>
                    Move player to lane 1
                  </button>
                  {/* CSLOT_MOVE_RIGHT_CP_RIGHT */}
                  <button data-action="ACT_MOVE_RIGHT" data-control-slot="CSLOT_MOVE_RIGHT_CP_RIGHT" type="button" className="py-2 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition" data-setfarm-element-ref="E000010" data-observable-refs="OBS_MOVE_RIGHT_O_RIGHT_BUTTON" data-action-id="move-player-to-lane-2-4" onClick={actions?.["move-player-to-lane-2-4"]}>
                    Move player to lane 2
                  </button>
                </div>
              </div>
      
              {/* Action / Mission Primary Section */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex flex-col space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Primary Operations</span>
                <div className="flex flex-col space-y-2 pt-1">
                  {/* CSLOT_START_ROUND_CP_START */}
                  <button data-action="ACT_START_ROUND" data-control-slot="CSLOT_START_ROUND_CP_START" type="button" className="w-full py-2 px-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition shadow-md shadow-cyan-600/30" data-setfarm-element-ref="E000011" data-observable-refs="OBS_START_ROUND_O_START_BUTTON" data-action-id="start-round-5" onClick={actions?.["start-round-5"]}>
                    Start round
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    {/* CSLOT_COLLECT_STAR_CP_COLLECT */}
                    <button data-action="ACT_COLLECT_STAR" data-control-slot="CSLOT_COLLECT_STAR_CP_COLLECT" type="button" className="py-2 px-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-md shadow-amber-500/20" data-setfarm-element-ref="E000012" data-observable-refs="OBS_COLLECT_STAR_O_COLLECT_BUTTON" data-action-id="collect-the-star-6" onClick={actions?.["collect-the-star-6"]}>
                      Collect the star
                    </button>
                    {/* CSLOT_RESTART_ROUND_CP_RESTART */}
                    <button data-action="ACT_RESTART_ROUND" data-control-slot="CSLOT_RESTART_ROUND_CP_RESTART" type="button" className="py-2 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition" data-setfarm-element-ref="E000013" data-observable-refs="OBS_RESTART_ROUND_O_RESTART_BUTTON" data-action-id="restart-round-7" onClick={actions?.["restart-round-7"]}>
                      Restart round
                    </button>
                  </div>
                </div>
              </div>
      
              {/* Settings Triggers Section */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex flex-col space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Settings Access Points</span>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {/* CSLOT_OPEN_SETTINGS_CP_SETTINGS */}
                  <button data-action="ACT_OPEN_SETTINGS" data-control-slot="CSLOT_OPEN_SETTINGS_CP_SETTINGS" type="button" className="col-span-2 py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition" data-setfarm-element-ref="E000014" data-action-id="open-settings-8" onClick={actions?.["open-settings-8"]}>
                    Open settings
                  </button>
                  {/* CSLOT_OPEN_SETTINGS_CP_LEFT */}
                  <button data-action="ACT_OPEN_SETTINGS" data-control-slot="CSLOT_OPEN_SETTINGS_CP_LEFT" type="button" className="py-1 px-1.5 rounded-lg bg-slate-850 hover:bg-slate-750 text-slate-400 text-[11px] border border-slate-800 transition" data-setfarm-element-ref="E000015" data-observable-refs="OBS_OPEN_SETTINGS_O_SETTINGS_LEFT" data-action-id="open-settings-left-9" onClick={actions?.["open-settings-left-9"]}>
                    Open settings (Left)
                  </button>
                  {/* CSLOT_OPEN_SETTINGS_CP_CENTER */}
                  <button data-action="ACT_OPEN_SETTINGS" data-control-slot="CSLOT_OPEN_SETTINGS_CP_CENTER" type="button" className="py-1 px-1.5 rounded-lg bg-slate-850 hover:bg-slate-750 text-slate-400 text-[11px] border border-slate-800 transition" data-setfarm-element-ref="E000016" data-observable-refs="OBS_OPEN_SETTINGS_O_SETTINGS_CENTER" data-action-id="open-settings-center-10" onClick={actions?.["open-settings-center-10"]}>
                    Open settings (Center)
                  </button>
                  {/* CSLOT_OPEN_SETTINGS_CP_RIGHT */}
                  <button data-action="ACT_OPEN_SETTINGS" data-control-slot="CSLOT_OPEN_SETTINGS_CP_RIGHT" type="button" className="py-1 px-1.5 rounded-lg bg-slate-850 hover:bg-slate-750 text-slate-400 text-[11px] border border-slate-800 transition" data-setfarm-element-ref="E000017" data-observable-refs="OBS_OPEN_SETTINGS_O_SETTINGS_RIGHT" data-action-id="open-settings-right-11" onClick={actions?.["open-settings-right-11"]}>
                    Open settings (Right)
                  </button>
                  {/* CSLOT_OPEN_SETTINGS_CP_COLLECT */}
                  <button data-action="ACT_OPEN_SETTINGS" data-control-slot="CSLOT_OPEN_SETTINGS_CP_COLLECT" type="button" className="py-1 px-1.5 rounded-lg bg-amber-600/30 hover:bg-amber-600/40 text-amber-200 text-[11px] border border-amber-700/40 transition" data-setfarm-element-ref="E000018" data-observable-refs="OBS_OPEN_SETTINGS_O_SETTINGS_COLLECT" data-action-id="open-settings-collect-12" onClick={actions?.["open-settings-collect-12"]}>
                    Open settings (Collect)
                  </button>
                </div>
              </div>
      
              {/* Alternate Resume Endpoints Section */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex flex-col space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Console Resume Relays</span>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {/* CSLOT_RESUME_GAME_CP_LEFT */}
                  <button data-action="ACT_RESUME_GAME" data-control-slot="CSLOT_RESUME_GAME_CP_LEFT" type="button" className="py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition" data-setfarm-element-ref="E000019" data-observable-refs="OBS_RESUME_GAME_O_RESUME_LEFT" data-action-id="resume-game-lane-0-13" onClick={actions?.["resume-game-lane-0-13"]}>
                    Resume game (Lane 0)
                  </button>
                  {/* CSLOT_RESUME_GAME_CP_CENTER */}
                  <button data-action="ACT_RESUME_GAME" data-control-slot="CSLOT_RESUME_GAME_CP_CENTER" type="button" className="py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition" data-setfarm-element-ref="E000020" data-observable-refs="OBS_RESUME_GAME_O_RESUME_CENTER" data-action-id="resume-game-lane-1-14" onClick={actions?.["resume-game-lane-1-14"]}>
                    Resume game (Lane 1)
                  </button>
                  {/* CSLOT_RESUME_GAME_CP_RIGHT */}
                  <button data-action="ACT_RESUME_GAME" data-control-slot="CSLOT_RESUME_GAME_CP_RIGHT" type="button" className="py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition" data-setfarm-element-ref="E000021" data-observable-refs="OBS_RESUME_GAME_O_RESUME_RIGHT" data-action-id="resume-game-lane-2-15" onClick={actions?.["resume-game-lane-2-15"]}>
                    Resume game (Lane 2)
                  </button>
                </div>
              </div>
      
            </div>
          </footer>
        </div>
    </>
  );
}
