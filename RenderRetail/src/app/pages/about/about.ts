import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CompanyInfo {
  intro: string;
  mission: { title: string; description: string; };
  vision: { title: string; description: string; };
  values: { name: string; description: string; }[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  companyInfo = signal<CompanyInfo>({
    intro: 'En Render Retail, somos los arquitectos digitales que impulsan la transformación del sector minorista. Nos especializamos en crear soluciones de software innovadoras y escalables que optimizan operaciones, mejoran la experiencia del cliente y maximizan el crecimiento de tu negocio.',
    mission: {
      title: 'Nuestra Misión',
      description: 'Empoderar a las empresas minoristas con tecnología de vanguardia, desarrollando software intuitivo y eficiente que les permita adaptarse, competir y prosperar en un mercado en constante evolución.'
    },
    vision: {
      title: 'Nuestra Visión',
      description: 'Ser el socio tecnológico preferido del sector retail, reconocidos por nuestra excelencia en innovación, calidad y el impacto positivo que generamos en el éxito de nuestros clientes a nivel global.'
    },
    values: [
      { name: 'Innovación Constante', description: 'Siempre buscando nuevas y mejores formas de resolver los desafíos del retail con creatividad y visión de futuro.' },
      { name: 'Excelencia en Calidad', description: 'Comprometidos con la entrega de soluciones robustas, seguras y de alto rendimiento que superen las expectativas.' },
      { name: 'Orientación al Cliente', description: 'Entendemos y superamos las expectativas de nuestros clientes, construyendo relaciones duraderas basadas en la confianza y el éxito mutuo.' },
      { name: 'Agilidad y Adaptabilidad', description: 'Capaces de responder rápidamente a los cambios del mercado y las necesidades emergentes, asegurando soluciones flexibles.' },
      { name: 'Colaboración Transparente', description: 'Creemos en el trabajo en equipo y la comunicación abierta, tanto internamente como con nuestros clientes.' },
      { name: 'Impacto Positivo', description: 'Nos esforzamos por generar un valor real y medible que impulse el crecimiento y la sostenibilidad de cada negocio minorista.' }
    ]
  });

  constructor() { }
}