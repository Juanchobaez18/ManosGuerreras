import type { LineaAccion } from '../types/fundacion';

interface TarjetaProgramaProps {
    programa: LineaAccion;
}

export function TarjetaPrograma({ programa }: TarjetaProgramaProps) {
    return (
        <article className="program-card">
            <span className="program-icon" aria-hidden="true">{programa.icono}</span>
            <h3>{programa.titulo}</h3>
            <p>
                {programa.descripcion}
            </p>
            <span className="program-arrow" aria-hidden="true">↗</span>
        </article>
    );
}