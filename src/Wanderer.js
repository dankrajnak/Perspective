class Wanderer{
    
    
    constructor(width, height){
        this.width = width;
        this.height = height;
        this._pos = [Math.random()* width, Math.random() * height];
        this._FRAME_RATE = 33;
        this._wanderToFromStart = null;
        this._animationFrame;
        this._wandering = false;
        this._alpha = 3; //Parameter of easing function
    }
    
    startWandering(callBack, time, from=[Math.random()*this.width, Math.random()*this.height]){
        this._wandering = true;
        this.wanderToFrom([Math.random()*this.width, Math.random()*this.height], from, time, callBack);
    }
    
    stopWandering(immediately=false){
        this._wandering = false;
        if(immediately){
            window.cancelAnimationFrame(this._animationFrame);
            this._wanderToFromStart = null;
        }
    }
    
    wanderToFrom(to, from, time, callback){
        this._alpha = (Math.random()*4+1) | 0; //Randomly pick new alpha for easing function
        this._animationFrame = window.requestAnimationFrame((timeStep)=>this._step(to, from, time, callback, timeStep));
    }
    
    _step(to, from, totalTime, callback, timeStep){
        if(!this._wanderToFromStart) this._wanderToFromStart = timeStep;
        
        let progress = timeStep - this._wanderToFromStart;
        let newPosition = this._interpolate(to, from, Math.min(1, progress/totalTime));
        callback(newPosition); 
        if(progress < totalTime)
            this._animationFrame = window.requestAnimationFrame((newTimeStep) => this._step(to, newPosition, totalTime, callback, newTimeStep))
        else{
            this._wanderToFromStart = null;
            //If wandering, wander from this point to a new one
            if(this._wandering)
                this.wanderToFrom([Math.random()*width, Math.random()*height], newPosition, totalTime, callback);
        }
    }
    
    _interpolate(to, from, t){
        let totalDistance = this._euclideanDistance(to, from);
        return this._distanceDownLine(from, to, totalDistance*this._easeInOut(t));
    }
    
    _easeInOut(t) {
        //easing function = t^a/(t^a+(1-t)^a).
        return Math.pow(t, this._alpha)/(Math.pow(t, this._alpha)+Math.pow(1-t, this._alpha));
	}

    _distanceDownLine(pointA, pointB, distance) {
        /* Returns a point the given distance down the line specified */

        //Similar triangles
        const A = pointB[1] - pointA[1];
        const B = pointB[0] - pointA[0];
        if(A==0&&B==0) return pointA;
        const C = this._euclideanDistance(pointA, pointB);
        

        const x = B - B * (C - distance) / C;
        const y = A - A * (C - distance) / C;

        return [pointA[0] + x, pointA[1] + y];
    }
    
    _euclideanDistance(pointA, pointB) {
        //sqrt(a^2+b^2)
        return Math.sqrt(Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2));
    }
}
