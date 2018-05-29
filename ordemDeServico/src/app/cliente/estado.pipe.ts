import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: string): string {
    value = value.toUpperCase();

    switch (value) {
      case 'AC': return 'AC - Acre';
      case 'AL': return 'AL - Alagoas';
      case 'AP': return 'AP - Amapá';
      case 'AM': return 'AM - Amazonas';
      case 'BA': return 'BA - Bahia';
      case 'DF': return 'DF - Distrito Federal';
      case 'ES': return 'ES - Espírito Santo';
      case 'GO': return 'GO - Goiás';
      case 'MA': return 'MA - Maranhão';
      case 'MT': return 'MT - Mato Grosso';
      case 'MS': return 'MS - Mato Grosso do Sul';
      case 'MG': return 'MG - Minas Gerais';
      case 'PA': return 'PA - Pará';
      case 'PB': return 'PB - Paraíba';
      case 'PR': return 'PR - Paraná';
      case 'PE': return 'PE - Pernambuco';
      case 'PI': return 'PI - Piauí';
      case 'RJ': return 'RJ - Rio de Janeiro';
      case 'RN': return 'RN - Rio Grande do Norte';
      case 'RS': return 'RS - Rio Grande do Sul';
      case 'RO': return 'RO - Rondônia';
      case 'RR': return 'RR - Roraima';
      case 'SC': return 'SC - Santa Catarina';
      case 'SP': return 'SP - São Paulo';
      case 'SE': return 'SE - Sergipe';
      case 'TO': return 'TO - Tocantins';
    }

    return value + ' - Desconhecido';
  }

}
