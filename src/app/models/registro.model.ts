export class Registro {
    public formato: string;
    public texto: string;
    public type: string;
    public icon: string;
    public creado: Date;

    constructor(format: string, text: string) {
        this.formato = format;
        this.texto = text;
        this.creado = new Date();
        this.determinarTipo();
    }


    private determinarTipo(){
        const inicioTexto = this.texto.substr(0,4);
        console.log('Tipo:', inicioTexto);

        switch (inicioTexto) {
            case 'http':
                this.type = 'Sitio web'
                this.icon = 'globe-outline'
                break;

            case 'geo:':
                this.type = 'Mapa'
                this.icon = 'map-outline'
                break;
        
            default:
                this.type = 'No configurado'
                this.icon = 'pencil-outline'
                break;
        }
    }
}
