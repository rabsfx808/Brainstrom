import React from "react";

export default function Card({
  title,
  description,
  price,
  priceSuffix,
  imageArea,
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {imageArea && (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          {imageArea}
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {price !== undefined && (
            <span className="inline-flex items-center bg-secondary-100 text-secondary-800 text-sm font-medium px-2.5 py-0.5 rounded whitespace-nowrap">
              ${price.toLocaleString()}
              {priceSuffix && (
                <span className="text-xs ml-1">{priceSuffix}</span>
              )}
            </span>
          )}
        </div>
        {description && (
          <p className="mt-2 text-gray-600 text-sm line-clamp-3">
            {description}
          </p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
