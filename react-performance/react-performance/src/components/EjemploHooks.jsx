import React, { useMemo, useCallback } from "react";

// const resultado = useMemo(()=>componentOrValue(a,b),[])


const MiComponente = ({ name }) => {

    useCallback(
        () => {

        }, [name],
    )


    return (
        <h1>Mi Componente</h1>
    )
}
// const Memorizacion = useMemo(() => miComponente, [a,b])
