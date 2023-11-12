
class TabItem { 
    constructor(link, content) { 
        this.link = link; 
        this.content = content; 
    } 
    
    onClick(callback) { 
        this.link.addEventListener('click', callback); 
    } 
    
    activate() { 
        this._toggle(true);   
    } 
    
    deactivate() { 
        this._toggle(false); 
    } 
    
    _toggle(activate) { 
        this.link.classList.toggle('_active', activate); 
        this.content.classList.toggle('_active', activate); 
    } 
} 

export class TabsManager { 
    constructor(tabsElem) { 
        this.tabs = []; 
        this.activeTab = null; 
        
        this.init(tabsElem);     
        this.activateTab(this.tabs[0]); 
    } 
    
    init(tabsElem) { 
        const links = tabsElem.querySelectorAll('.prices__categories li'); 
        const contents = tabsElem.querySelectorAll('.prices__items'); 
        for (let i = 0; i < links.length; i++) { 
            const tab = new TabItem(links[i], contents[i]); 
            this.tabs.push(tab); 

            tab.onClick(() => this.activateTab(tab));   
        } 
    } 

    activateTab(tab) { 
        if (this.activeTab) { 
            this.activeTab.deactivate(); 
        } 
        this.activeTab = tab; 
        this.activeTab.activate(); 
    } 
} 

