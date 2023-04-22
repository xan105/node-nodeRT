  export class Size {
    constructor();
  }

  export class PreviewNotesContract {
    constructor();
  }

  export class NotePlacementChangedPreviewEventArgs {
    viewId: number;
    constructor();

  }

  export class NoteVisibilityChangedPreviewEventArgs {
    isVisible: boolean;
    viewId: number;
    constructor();

  }

  export class NotesWindowManagerPreviewShowNoteOptions {
    showWithFocus: boolean;
    constructor();

  }

  export class NotesWindowManagerPreview {
    isScreenLocked: boolean;
    constructor();

    static getForCurrentApp(): NotesWindowManagerPreview;


    setNotesThumbnailAsync(thumbnail: Object, callback: (error: Error) => void): void ;

    setThumbnailImageForTaskSwitcherAsync(bitmap: Object, callback: (error: Error) => void): void ;

    showNote(noteViewId: number): void;

    showNoteRelativeTo(noteViewId: number, anchorNoteViewId: number): void;
    showNoteRelativeTo(noteViewId: number, anchorNoteViewId: number, options: NotesWindowManagerPreviewShowNoteOptions): void;

    showNoteWithPlacement(noteViewId: number, data: Object): void;
    showNoteWithPlacement(noteViewId: number, data: Object, options: NotesWindowManagerPreviewShowNoteOptions): void;

    hideNote(noteViewId: number): void;

    getNotePlacement(noteViewId: number): Object;

    trySetNoteSize(noteViewId: number, size: Object): boolean;

    setFocusToNextView(): void;

    setFocusToPreviousView(): void;

    addListener(type: "NotePlacementChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "NotePlacementChanged", listener: (ev: Event) => void): void ;
    on(type: "NotePlacementChanged", listener: (ev: Event) => void): void ;
    off(type: "NotePlacementChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoteVisibilityChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "NoteVisibilityChanged", listener: (ev: Event) => void): void ;
    on(type: "NoteVisibilityChanged", listener: (ev: Event) => void): void ;
    off(type: "NoteVisibilityChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SystemLockStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SystemLockStateChanged", listener: (ev: Event) => void): void ;
    on(type: "SystemLockStateChanged", listener: (ev: Event) => void): void ;
    off(type: "SystemLockStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

