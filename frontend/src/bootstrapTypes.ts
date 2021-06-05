declare namespace bootstrap{
    class Modal {
        public constructor(element: HTMLDivElement);
        public static getInstance(element: HTMLDivElement): Modal;
        addEventListener: (eventType: events, callback: () => void) => void;
        dispose: () => void;
        handleUpdate: () => void;
        hide: () => void;
        show: () => void;
        toggle: () => void
    }

    type events = "show.bs.modal" | "shown.bs.modal" | "hide.bs.modal" | "hidden.bs.modal" | "hidePrevented.bs.modal";
}

