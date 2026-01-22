// Brand data configuration
// This file auto-generates brand list from folder structure

export interface Brand {
    id: string;
    name: string;
    folder: string;
    description?: string;
}

export const brands: Brand[] = [
    {
        id: "acero",
        name: "Acero",
        folder: "Acero",
        description: "Metal fabrication and steel solutions"
    },
    {
        id: "aqua-care",
        name: "Aqua Care",
        folder: "Aqua-Care",
        description: "Water filtration and purification systems"
    },
    {
        id: "beyond-cars",
        name: "Beyond Cars",
        folder: "Beyond-Cars",
        description: "Automotive SaaS platform"
    },
    {
        id: "galaxy-star",
        name: "Galaxy Star",
        folder: "Galaxy-Star",
        description: "Perfumes and fragrances"
    },
    {
        id: "knk",
        name: "KNK",
        folder: "Knk",
        description: "Interior design and fabrication"
    },
    {
        id: "q4",
        name: "Q4 Clean Home",
        folder: "Q4",
        description: "Cleaning products and solutions"
    },
    {
        id: "suncore",
        name: "Suncore Energies",
        folder: "Suncore",
        description: "Solar energy solutions"
    },
    {
        id: "tes",
        name: "TESS",
        folder: "Tes",
        description: "Educational institution"
    }
];

// Helper function to get brand by ID
export function getBrandById(id: string): Brand | undefined {
    return brands.find(brand => brand.id === id);
}

// Helper function to get brand by folder name
export function getBrandByFolder(folder: string): Brand | undefined {
    return brands.find(brand => brand.folder === folder);
}
