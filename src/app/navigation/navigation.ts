import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Historias de datos',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'academy',
                title    : 'Estadísticas Policiales',
                translate: 'NAV.ACADEMY',
                type     : 'item',
                icon     : 'stars',
                children : [
                    {
                        id   : 'type-unlawful-acts-quantity',
                        title: 'Cantidad de Tipos de Délitos',
                        type : 'item',
                        url  : '/data-histories/police-statistics/type-unlawful-acts-quantity'
                    }
                ]
            },
            {
                id       : 'dashboards',
                title    : 'Estadísticas Policiales',
                translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'stars',
                children : [
                    {
                        id   : 'analytics',
                        title: 'Cantidad de Tipos de Délitos',
                        type : 'item',
                        url  : '/data-histories/police-statistics/type-unlawful-acts-quantity'
                    },
                    {
                        id   : 'project',
                        title: 'Tendencia Délitos',
                        type : 'item',
                        url  : '/data-histories/police-statistics/unlawful-acts-trend'
                    },
                    {
                        id   : 'project3',
                        title: 'Composición Según Tipo',
                        type : 'item',
                        url  : '/data-histories/police-statistics/unlawful-acts-type-composition'
                    }
                ]
            }
        ]
    }
];
