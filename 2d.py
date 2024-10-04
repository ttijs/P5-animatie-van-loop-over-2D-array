import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# 2D array
array = np.random.randint(0, 10, size=(5, 5))

# Functie om de 2D array te visualiseren
def update_plot(frame, img, array):
    # Reset de array naar grijswaarden
    img.set_array(array)
    # Bepaal de huidige positie van de for-loop
    i, j = divmod(frame, array.shape[1])
    
    # Kopieer de array zodat we deze kunnen manipuleren
    new_array = array.copy()
    # Markeer de huidige positie met een andere kleur (bijv. geel)
    new_array[i, j] = np.max(array) + 1  # Zet een hogere waarde voor de huidige positie
    
    img.set_array(new_array)
    return img,

# Maak een figuur en de bijbehorende 'axes'
fig, ax = plt.subplots()
img = ax.imshow(array, cmap='gray')

# Maak de animatie
ani = animation.FuncAnimation(
    fig, update_plot, frames=array.size, fargs=(img, array), interval=500, blit=True
)

# Laat de animatie zien
plt.show()
