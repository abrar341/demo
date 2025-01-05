import React, { useState } from "react";

const TreatmentsSettings = () => {
    const LOCAL_STORAGE_KEY = "treatmentsData";

    const defaultCategories = [
        {
            id: 1,
            name: "Injectables",
            subcategories: ["Botox", "Dermal Fillers", "PRP Therapy"],
        },
        {
            id: 2,
            name: "Skin Improvement",
            subcategories: ["Chemical Peels", "Microdermabrasion", "Laser Treatments", "Light Therapies"],
        },
        {
            id: 3,
            name: "Hair Removal",
            subcategories: ["Laser Hair Removal", "Waxing", "Electrolysis"],
        },
        {
            id: 4,
            name: "Soft Surgery",
            subcategories: ["Plasma Pen", "Thread Lifting"],
        },
        {
            id: 5,
            name: "Plastic Surgery",
            subcategories: ["Rhinoplasty", "Liposuction", "Facelift"],
        },
    ];

    const getInitialData = () => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!savedData) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultCategories));
            return defaultCategories;
        }
        return JSON.parse(savedData);
    };

    const [categories, setCategories] = useState(getInitialData());
    const [tempCategories, setTempCategories] = useState(categories);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [newSubcategory, setNewSubcategory] = useState("");

    const handleAddSubcategory = () => {
        if (newSubcategory.trim()) {
            setTempCategories((prevCategories) =>
                prevCategories.map((category) =>
                    category.id === activeCategory.id
                        ? { ...category, subcategories: [...category.subcategories, newSubcategory] }
                        : category
                )
            );
            setNewSubcategory("");
        }
    };

    const handleRemoveSubcategory = (subcategory) => {
        setTempCategories((prevCategories) =>
            prevCategories.map((category) =>
                category.id === activeCategory.id
                    ? {
                        ...category,
                        subcategories: category.subcategories.filter((item) => item !== subcategory),
                    }
                    : category
            )
        );
    };

    const handleSave = () => {
        setCategories(tempCategories);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tempCategories));
    };

    const handleCancel = () => {
        setTempCategories(categories);
    };

    return (
        <div className="flex w-full  ">
            <aside className="w-1/3 px-2 mx-5">
                <h2 className="text-lg font-bold text-gray-600 mb-4">Treatments</h2>
                <ul className="space-y-2">
                    {tempCategories.map((category) => (
                        <li
                            key={category.id}
                            className={`cursor-pointer text-sm py-2 px-4 rounded-lg ${activeCategory.id === category.id
                                ? "bg-blue-50 text-purple-600 font-semibold"
                                : "hover:bg-gray-200"
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="w-3/4 bg-blue-50 rounded-2xl px-4 p-6 mt-10">
                <h2 className="text-base text-gray-600 font-bold mb-4">
                    {activeCategory.name} (
                    {tempCategories.find((category) => category.id === activeCategory.id)?.subcategories.length || 0})
                </h2>

                <ul className="border border-gray-300 rounded-xl overflow-hidden mb-4">
                    {tempCategories
                        .find((category) => category.id === activeCategory.id)
                        ?.subcategories.map((subcategory, index, array) => {
                            const isLast = index === array.length - 1;
                            return (
                                <li
                                    key={index}
                                    className={`flex bg-white items-center justify-between px-4 ${!isLast ? "border-b border-gray-300" : ""
                                        }`}
                                >
                                    <span className="w-full border-r border-gray-300 text-xs py-2.5 font-semibold text-gray-600">
                                        {subcategory}
                                    </span>
                                    <button
                                        className="text-gray-400 pl-3 text-base hover:text-red-500"
                                        onClick={() => handleRemoveSubcategory(subcategory)}
                                    >
                                        ✕
                                    </button>
                                </li>
                            );
                        })}
                </ul>

                <div className="flex justify-center items-center gap-2 mb-4 px-4">
                    <input
                        type="text"
                        value={newSubcategory}
                        onChange={(e) => setNewSubcategory(e.target.value)}
                        placeholder="Skin Improvement..."
                        className="w-full border border-gray-300 text-sm outline-none rounded-lg px-4 py-2"
                    />
                    <button
                        className="bg-white text-purple-600 font-bold text-xl  border border-gray-300 py-1 px-3 rounded-lg hover:bg-gray-100"
                        onClick={handleAddSubcategory}
                    >
                        +
                    </button>
                </div>

                <div className="flex gap-4 px-4">
                    <button
                        className="border bg-white rounded-lg px-4 py-1.5 w-full hover:bg-gray-100 font-semibold"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-purple-600 w-full rounded-lg text-white font-semibold text-base px-4 py-1.5 hover:bg-purple-700"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </main>
        </div>
    );
};

export default TreatmentsSettings;
