import { useState, type CSSProperties, type JSX } from "react";
import { AutoComplete, Input } from "antd";
import { products } from "@/data/products";
import { useNavigate } from "react-router";


function SearchBox({ className, styles }: { className?: string; styles?: CSSProperties }) {
  const [options, setOptions] = useState<{ value: string; label: JSX.Element }[]>([]);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    setInputValue(value);
    if (!value.trim()) {
      setOptions([]);
      return;
    }

    const filtered = products
      .filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 6);

    setOptions(
      filtered.map((item) => ({
        value: String(item.name),
        id: item.id,
        label: (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {item.thumbnail && (
              <img
                src={item.thumbnail}
                alt={item.name}
                style={{ width: 30, height: 30, objectFit: "cover", borderRadius: 4 }}
              />
            )}
            <span>{item.name}</span>
          </div>
        ),
      }))
    );
  };

  const handleSelect = (value: string, option: any) => {
    setInputValue(value); 
    const productId = option.id; 
    if (productId) {
      navigate(`/products/${productId}`);
    }
  };

  return (
    <AutoComplete
      className={className}
      popupMatchSelectWidth={300}
      style={{ minWidth: 237, ...styles }}
      options={options}
      value={inputValue}
      onSearch={handleSearch}
      onSelect={handleSelect}
    >
      <Input.Search placeholder="What are you looking for?" variant="filled" />
    </AutoComplete>
  );
}

export default SearchBox;
