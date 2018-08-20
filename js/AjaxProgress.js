export class AjaxProgress extends XMLHttpRequest {
    constructor(control, loaderContainer) {
        console.log(control);
        super();
        this._control = control;
        this._loaderContainer = loaderContainer;
        super.onprogress = this._onprogress;
    }

    // xhr method send is override here
    send(data) {
        // This is main xhr method
        console.log("this is xhr send method");
        super.send(data);
        this._control.disabled = true;
        this._loaderContainer.classList.remove("hidden");
    }

    _onprogress(event) {
        let percentageComplete = Number.parseInt((event.loaded / event.total) * 100);
        console.log("percentage complete : ", percentageComplete);
        if(percentageComplete === 100) {
            this._control.disabled = false;
            this._loaderContainer.classList.add("hidden");
        }
    }
}