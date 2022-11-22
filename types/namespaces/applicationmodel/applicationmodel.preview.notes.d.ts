  export class Size {
    constructor();
  }

  export class PreviewNotesContract {
    constructor();
  }

  export class NotePlacementChangedPreviewEventArgs {
    viewId: Number;
    constructor();

  }

  export class NoteVisibilityChangedPreviewEventArgs {
    isVisible: Boolean;
    viewId: Number;
    constructor();

  }

  export class NotesWindowManagerPreviewShowNoteOptions {
    showWithFocus: Boolean;
    constructor();

  }

  export class NotesWindowManagerPreview {
    isScreenLocked: Boolean;
    constructor();

    static getForCurrentApp(): NotesWindowManagerPreview;


    setNotesThumbnailAsync(thumbnail: Object, callback: (error: Error) => void): void ;

    setThumbnailImageForTaskSwitcherAsync(bitmap: Object, callback: (error: Error) => void): void ;

    showNote(noteViewId: Number): void;

    showNoteRelativeTo(noteViewId: Number, anchorNoteViewId: Number): void;
    showNoteRelativeTo(noteViewId: Number, anchorNoteViewId: Number, options: NotesWindowManagerPreviewShowNoteOptions): void;

    showNoteWithPlacement(noteViewId: Number, data: Object): void;
    showNoteWithPlacement(noteViewId: Number, data: Object, options: NotesWindowManagerPreviewShowNoteOptions): void;

    hideNote(noteViewId: Number): void;

    getNotePlacement(noteViewId: Number): Object;

    trySetNoteSize(noteViewId: Number, size: Object): Boolean;

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

