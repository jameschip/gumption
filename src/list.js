function InitList() {
    
    this.ul = document.createElement('ul');
    this.initDiv = document.createElement('DIV');
    this.initDiv.appendChild(this.ul);

    var elements    = [];
    var current_initiative = 0;

    this.insert = function(db) {
        elements.push(db);
        elements.sort(function(a, b) {
            return parseInt(b["init"]) - parseInt(a["init"]);
        });
        this.update();
    }

    this.update = function() {
        this.ul.innerHTML = "";
        for (var i = 0, len = elements.length; i < len; i++) {
            this.add(elements[i]);
        }
    }

    this.add = function(db) {
        // Create the elements that go in the list item
        var li      = document.createElement('li');
        var nm      = document.createTextNode(db["name"]);
        var inbx    = document.createElement('SPAN');
        var ini      = document.createTextNode(db["init"]);
        var clsbx   = document.createElement('SPAN');
        var cl      = document.createTextNode('\u00D7');

        inbx.className = "init";
        clsbx.className = "close";

        clsbx.onclick = function() {
            li.style.display = "none";
        }

        inbx.appendChild(ini);
        clsbx.appendChild(cl);
        li.appendChild(nm);
        li.appendChild(inbx);
        li.appendChild(clsbx);

        this.ul.appendChild(li);

    }

    this.clear = function() {
        this.ul.innerHTML = "";
        elements = [];
        this.current_initiative = 0;
    }

    this.nextInitiative = function() {
        current_initiative++;
        if (current_initiative > elements.length) current_initiative = 0;
    }

    this.prevInitiative = function() {
        current_initiative--;
        if (current_initiative < 0) current_initiative = elements.length;
    }

    this.slectInitiative = function() {
        var l = this.ul.getElementsByTagName('li');
        
        var index = 0;
        l.array.forEach(element => {
            if (index == current_initiative) {
                element.style.className = "active";
            }
        });
    }

}
