

export const getAllBooks = async () => {
    const res = await fetch ("http://127.0.0.1:8000/api/book");
    if (!res.ok) throw new Error("Response not ok");
    const data = await res.json();
    return data;
};
