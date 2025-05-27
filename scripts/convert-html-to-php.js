import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем __dirname в ES модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция для конвертации HTML файлов в PHP
function convertHtmlToPhp(directory) {
    // Читаем содержимое директории
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // Рекурсивно обрабатываем поддиректории
            convertHtmlToPhp(filePath);
        } else if (file.endsWith('.html')) {
            try {
                // Читаем содержимое HTML файла
                const htmlContent = fs.readFileSync(filePath, 'utf8');
                
                // Получаем новый путь с расширением .php
                const newFilePath = filePath.replace('.html', '.php');
                
                // Записываем новый PHP файл
                fs.writeFileSync(newFilePath, htmlContent, 'utf8');
                
                // Удаляем старый HTML файл
                fs.unlinkSync(filePath);
                
                console.log(`Converted: ${filePath} -> ${newFilePath}`);
            } catch (error) {
                console.error(`Error converting ${filePath}:`, error);
            }
        }
    });
}

// Путь к директории dist (относительно корня проекта)
const distPath = path.join(__dirname, '..', 'dist');

// Проверяем существование директории
if (fs.existsSync(distPath)) {
    console.log('Starting conversion of HTML files to PHP...');
    convertHtmlToPhp(distPath);
    console.log('Conversion completed!');
} else {
    console.error('Directory "dist" not found!');
} 